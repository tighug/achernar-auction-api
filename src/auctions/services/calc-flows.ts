import { Flow } from "src/flow-transitions/flow.entity";
import { Wire } from "src/wires/wire.entity";

const BASE_VOLTAGE = Number(process.env.BASE_VOLTAGE);
const IGNORED_VOLTAGE_GAP = Number(process.env.IGNORED_VOLTAGE_GAP);

export class CalcFlows {
  static execute(wires: Wire[], nodePs: number[]): Flow[] {
    if (wires.length !== nodePs.length) throw new Error("Invalid nodePs.");

    const flows = nodePs.map((nodeP, i) => {
      const flow = new Flow();
      flow.wire = wires[i];
      flow.nodeP = nodeP;
      flow.nodeV = BASE_VOLTAGE;
      return flow;
    });

    let isSameToBefNodeV = false;
    let tmpFlows: Flow[];

    while (!isSameToBefNodeV) {
      // Calc lineI in DESC node num order
      for (let i = flows.length - 1; i >= 0; i--) {
        flows[i].lineI = this.calcLineI(flows, i);
      }

      // Calc nodeV in ASC node num order
      for (let i = 0; i < flows.length; i++) {
        flows[i].nodeV = this.calcNodeV(flows, i, wires[i].zOhm);
      }

      if (this.checkSameToBefNodeVs(tmpFlows, flows)) {
        isSameToBefNodeV = true;
      } else {
        // Copy of last calclated flows
        tmpFlows = flows.concat();
      }
    }

    return flows;
  }

  private static calcLineI(flows: Flow[], index: number): number {
    // Flow which has wanted lineI
    const flow = flows[index];
    // Flows next to above flow
    const nextFlows = flows.filter(
      f => f.wire.prevNode.id === flow.wire.node.id
    );
    const nextLineIs = nextFlows.map(nextFlow => nextFlow.lineI);
    const nodeI = flow.nodeI;

    if (nextLineIs.length === 0) {
      return nodeI;
    } else {
      return nodeI + nextLineIs.reduce((acc, cur) => acc + cur);
    }
  }

  private static calcNodeV(flows: Flow[], index: number, zOhm: number): number {
    const flow = flows[index];
    let prevNodeV = 0;

    if (index === 0) prevNodeV = BASE_VOLTAGE;
    else {
      const prevFlow = flows.find(
        f => f.wire.node.id === flow.wire.prevNode.id
      );

      if (prevFlow === undefined)
        throw new Error("prevNode is undefined on " + flow.wire.node.num);

      prevNodeV = prevFlow.nodeV;
    }

    return prevNodeV - zOhm * flow.lineI;
  }

  private static checkSameToBefNodeVs(
    befFlows: Flow[],
    flows: Flow[]
  ): boolean {
    const isAllSame = flows.every((f, i) => {
      const befNodeV = befFlows[i].nodeV;
      const nodeV = f.nodeV;
      const absGapFromBefore = Math.abs(befNodeV - nodeV);
      const isSame = absGapFromBefore < IGNORED_VOLTAGE_GAP;

      return isSame;
    });

    return isAllSame;
  }
}
