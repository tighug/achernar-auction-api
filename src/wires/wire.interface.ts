import { NodeData } from "src/nodes/node.interface";

export interface WireData {
  id: number;
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

export interface WireRO {
  wire: WireData;
}
