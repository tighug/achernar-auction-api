import { Feeder } from "./feeder.entity";
import { FeederData } from "./feeder.interface";

export class FeedersSerializer {
  static serialize(feeder: Feeder): FeederData {
    return {
      id: feeder.id,
      networkNum: feeder.networkNum,
      feederNum: feeder.feederNum,
      nodeCount: feeder.nodeCount,
      houseCount: feeder.houseCount
    };
  }
}
