import { MarketData } from "src/markets/market.interface";
import { WireData } from "src/wires/wire.interface";

export interface FlowData {
  id: number;
  nodeP: number;
  nodeV: number;
  lineI: number;
  isFault: boolean;
}

export interface FlowTransitionData {
  id: number;
  market: MarketData;
  wire: WireData;
  initFlow: FlowData;
  befFlow: FlowData;
  aftFlow: FlowData;
}

export interface FlowTransitionsRO {
  flowTransitions: FlowTransitionData[];
  flowTransitionCount: number;
}
