export interface FeederData {
  id: number;
  networkNum: number;
  feederNum: number;
  nodeCount: number;
  houseCount: number;
}

export interface FeedersRO {
  feeders: FeederData[];
  feederCount: number;
}

export interface FeederRO {
  feeder: FeederData;
}
