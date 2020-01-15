import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NodalPrice } from "./nodal-price.entity";
import { Repository } from "typeorm";
import { NodalPricesRO } from "./nodal-price.interface";
import { NodalPricesSerializer } from "./nodal-prices.serializer";

@Injectable()
export class NodalPricesService {
  constructor(
    @InjectRepository(NodalPrice)
    private readonly _nodalPriceRepository: Repository<NodalPrice>
  ) {}

  async findByMarketId(marketId: number): Promise<NodalPricesRO> {
    const [
      nodalPrices,
      nodalPriceCount
    ] = await this._nodalPriceRepository.findAndCount({
      relations: ["market", "node"],
      where: {
        market: {
          id: marketId
        }
      }
    });
    const serializedNodalPrices = nodalPrices.map(
      NodalPricesSerializer.serialize
    );

    return {
      nodalPrices: serializedNodalPrices,
      nodalPriceCount
    };
  }
}
