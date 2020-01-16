import { Wire } from "src/wires/wire.entity";
import { Flow } from "src/flow-transitions/flow.entity";
import { NodalPrice } from "src/nodal-prices/nodal-price.entity";

export class CalcWeightPrices {
  static execute(
    wires: Wire[],
    flows: Flow[],
    nodalPrices: NodalPrice[]
  ): void {
    nodalPrices.forEach((np, i) => {
      if (i === 0) np.weightPrice = 0;
      else {
        const zOhms = wires.map(w => w.zOhm);
        const flow = flows.find(f => f.wire.node.id === nodalPrices[i].node.id);

        if (flow === undefined) throw new Error("flow is undefined.");

        const myNodeV = flow.nodeV;

        for (let k = 0; k <= i; k++) {
          const zOhm = k === 0 ? 0 : zOhms[k - 1];
          const deltaI = 1 / myNodeV;

          np.weightPrice +=
            (nodalPrices[k].muIp - nodalPrices[k].muIn) * deltaI;
          np.weightPrice -=
            (nodalPrices[k].muVp - nodalPrices[k].muVn) * deltaI * zOhm;
        }
      }
    });
  }
}
