import { Wire } from "./wire.entity";
import { WireData } from "./wire.interface";
import { NodesSerializer } from "../nodes/nodes.serializer";

export class WiresSerializer {
  static serialize(wire: Wire): WireData {
    return {
      id: wire.id,
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
