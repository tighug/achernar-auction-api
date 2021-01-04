import { MarketBaseRO } from "../market/MarketBaseRO";

export type NodalPriceBaseRO = {
  readonly id: number;
  readonly market: MarketBaseRO;
  readonly muIp: number;
  readonly muIn: number;
  readonly muVp: number;
  readonly muVn: number;
  readonly weightPrice: number;
};
