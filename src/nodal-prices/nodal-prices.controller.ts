import { Controller, Get, Query } from "@nestjs/common";
import { NodalPricesService } from "./nodal-prices.service";
import { NodalPricesRO } from "./nodal-price.interface";
import { NodalPricesSerializer } from "./nodal-prices.serializer";

@Controller("nodal-prices")
export class NodalPricesController {
  constructor(private readonly _nodalPricesService: NodalPricesService) {}

  @Get()
  async findByMarketId(
    @Query("market_id") marketId: number
  ): Promise<NodalPricesRO> {
    const [
      nodalPrices,
      nodalPriceCount
    ] = await this._nodalPricesService.findByMarketId(marketId);

    return {
      nodalPrices: nodalPrices.map(NodalPricesSerializer.serialize),
      nodalPriceCount
    };
  }
}
