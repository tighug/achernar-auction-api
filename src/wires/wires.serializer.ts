import { Wire } from "./wire.entity";
import { WireData } from "./wire.interface";
import { NodesSerializer } from "../nodes/nodes.serializer";
import { FeedersSerializer } from "../feeders/feeders.serializer";

export class WiresSerializer {
  static serialize(wire: Wire): WireData {
    return {
      id: wire.id,
      feeder: FeedersSerializer.serialize(wire.feeder),
      prevNode: NodesSerializer.serialize(wire.prevNode),
      node: NodesSerializer.serialize(wire.node),
      lengthM: wire.lengthM,
      phase: wire.phase,
      hasLoad: wire.hasLoad,
      cableType: wire.cableType,
      rOhmPerKm: wire.rOhmPerKm,
      xOhmPerKm: wire.xOhmPerKm,
      zOhm: wire.zOhm
    };
  }
}
