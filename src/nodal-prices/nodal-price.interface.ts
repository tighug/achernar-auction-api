import { MarketData } from "src/markets/market.interface";
import { NodeData } from "src/nodes/node.interface";

export interface NodalPriceData {
  id: number;
  market: MarketData;
  node: NodeData;
  muIp: number;
  muIn: number;
  muVp: number;
  muVn: number;
  weightPrice: number;
  agreedPrice: number;
}

export interface NodalPricesRO {
  nodalPrices: NodalPriceData[];
  nodalPriceCount: number;
}
