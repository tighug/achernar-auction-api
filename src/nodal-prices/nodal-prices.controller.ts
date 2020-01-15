import { Controller, Get, Query } from "@nestjs/common";
import { NodalPricesService } from "./nodal-prices.service";
import { NodalPricesRO } from "./nodal-price.interface";

@Controller("nodal-prices")
export class NodalPricesController {
  constructor(private readonly _nodalPricesService: NodalPricesService) {}

  @Get()
  async findByMarketId(
    @Query("market_id") marketId: number
  ): Promise<NodalPricesRO> {
    return await this._nodalPricesService.findByMarketId(marketId);
  }
}
