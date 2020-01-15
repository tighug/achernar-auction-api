import { Flow } from "./flow.entity";
import { FlowData } from "./flow-transition.interface";

export class FlowsSerializer {
  static serialize(flow: Flow): FlowData {
    return {
      id: flow.id,
      nodeP: flow.nodeP,
      nodeV: flow.nodeV,
      lineI: flow.lineI,
      isFault: flow.isFault
    }
  }
}