import { MarketData } from "src/markets/market.interface";

export interface MarketResultData {
  id: number;
  market: MarketData;
  price: number;
  sellBidSum: number;
  sellContractSum: number;
  buyBidSum: number;
  buyContractSum: number;
}

export interface MarketResultsRO {
  marketResults: MarketResultData[];
  marketResultCount: number;
}
