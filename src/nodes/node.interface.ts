import { FeederData } from "src/feeders/feeder.interface";

export interface NodeData {
  id: number;
  feeder: FeederData;
  num: number;
  posX: number;
  posY: number;
}

export interface NodesRO {
  nodes: NodeData[];
  nodeCount: number;
}
