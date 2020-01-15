import { NodeData } from "src/nodes/node.interface";
import { FeederData } from "src/feeders/feeder.interface";

export interface WireData {
  id: number;
  feeder: FeederData;
  prevNode: NodeData;
  node: NodeData;
  lengthM: number;
  phase: number;
  hasLoad: boolean;
  cableType: string;
  rOhmPerKm: number;
  xOhmPerKm: number;
  zOhm: number;
}

export interface WiresRO {
  wires: WireData[];
  wireCount: number;
}
