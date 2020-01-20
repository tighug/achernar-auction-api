import { Controller, Get, Query } from "@nestjs/common";
import { NodalPricesService } from "./nodal-prices.service";
import { NodalPricesRO } from "./nodal-price.interface";
import { NodalPricesSerializer } from "./nodal-prices.serializer";
import { FindNodalPricesQuery } from "./nodal-price.dto";

@Controller("nodal-prices")
export class NodalPricesController {
  constructor(private readonly _nodalPricesService: NodalPricesService) {}

  @Get()
  async findAll(@Query() query: FindNodalPricesQuery): Promise<NodalPricesRO> {
    const [
      nodalPrices,
      nodalPriceCount
    ] = await this._nodalPricesService.findAll(query);

    return {
      nodalPrices: nodalPrices.map(NodalPricesSerializer.serialize),
      nodalPriceCount
    };
  }
}
