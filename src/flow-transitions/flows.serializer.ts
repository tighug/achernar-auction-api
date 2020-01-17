import { Flow } from "./flow.entity";
import { FlowData } from "./flow-transition.interface";
import { WiresSerializer } from "src/wires/wires.serializer";

export class FlowsSerializer {
  static serialize(flow: Flow): FlowData {
    return {
      id: flow.id,
      wire: WiresSerializer.serialize(flow.wire),
      nodeP: flow.nodeP,
      nodeV: flow.nodeV,
      lineI: flow.lineI,
      isFault: flow.isFault
    };
  }
}
