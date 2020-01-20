import { FeederData } from "../feeders/feeder.interface";

export interface MarketData {
  id: number;
  feeder: FeederData;
  name: string;
  baseAgreedPrice: number;
}

export interface MarketsRO {
  markets: MarketData[];
  marketCount: number;
}

export interface MarketRO {
  market: MarketData;
}
