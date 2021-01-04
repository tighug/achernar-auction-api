import { NodalPrice } from "../model/NodalPrice";

export interface INodalPriceRepository {
  save(nodalPrice: NodalPrice): Promise<NodalPrice>;
  listByMarketId(marketName: string): Promise<NodalPrice[]>;
}
