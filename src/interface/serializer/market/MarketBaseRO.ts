import { FeederBaseRO } from "../feeder/FeederBaseRO";

export type MarketBaseRO = {
  name: string;
  feeder: FeederBaseRO;
};
