import { MarketData } from "src/markets/market.interface";
import { WireData } from "src/wires/wire.interface";

export interface FlowData {
  id: number;
  market: MarketData;
  wire: WireData;
}

export interface FlowsRO {
  flows: FlowData[];
  flowCount: number;
}
