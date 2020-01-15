import { FlowTransition } from "./flow-transition.entity";
import { FlowTransitionData } from "./flow-transition.interface";
import { MarketsSerializer } from "src/markets/markets.serializer";
import { WiresSerializer } from "src/wires/wires.serializer";
import { FlowsSerializer } from "./flows.serializer";

export class FlowTransitionsSerializer {
  static serialize(flowTransition: FlowTransition): FlowTransitionData {
    return {
      id: flowTransition.id,
      market: MarketsSerializer.serialize(flowTransition.market),
      wire: WiresSerializer.serialize(flowTransition.wire),
      initFlow: FlowsSerializer.serialize(flowTransition.initFlow),
      befFlow: FlowsSerializer.serialize(flowTransition.befFlow),
      aftFlow: FlowsSerializer.serialize(flowTransition.aftFlow)
    };
  }
}
