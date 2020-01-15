import { MarketResult } from "./market-result.entity";
import { MarketResultData } from "./market-result.interface";
import { MarketsSerializer } from "src/markets/markets.serializer";

export class MarketResultsSerializer {
  static serialize(marketResult: MarketResult): MarketResultData {
    return {
      id: marketResult.id,
      market: MarketsSerializer.serialize(marketResult.market),
      price: marketResult.price,
      sellBidSum: marketResult.sellBidSum,
      sellContractSum: marketResult.sellContractSum,
      buyBidSum: marketResult.buyBidSum,
      buyContractSum: marketResult.buyContractSum
    };
  }
}
