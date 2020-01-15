import { Market } from "./market.entity";
import { FeedersSerializer } from "../feeders/feeders.serializer";
import { MarketData } from "./market.interface";

export class MarketsSerializer {
  static serialize(market: Market): MarketData {
    return {
      id: market.id,
      feeder: FeedersSerializer.serialize(market.feeder),
      name: market.name,
      baseAgreedPrice: market.baseAgreedPrice
    };
  }
}
