import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NodalPrice } from "./nodal-price.entity";
import { Repository } from "typeorm";

@Injectable()
export class NodalPricesService {
  constructor(
    @InjectRepository(NodalPrice)
    private readonly _nodalPriceRepository: Repository<NodalPrice>
  ) {}

  async findByMarketId(marketId: number): Promise<[NodalPrice[], number]> {
    return await this._nodalPriceRepository.findAndCount({
      relations: ["market", "node"],
      where: {
        market: {
          id: marketId
        }
      }
    });
  }
}
