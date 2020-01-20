import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NodalPrice } from "./nodal-price.entity";
import { Repository } from "typeorm";
import { FindNodalPricesQuery } from "./nodal-price.dto";

@Injectable()
export class NodalPricesService {
  constructor(
    @InjectRepository(NodalPrice)
    private readonly _nodalPriceRepository: Repository<NodalPrice>
  ) {}

  async findAll(query: FindNodalPricesQuery): Promise<[NodalPrice[], number]> {
    const qb = this._nodalPriceRepository
      .createQueryBuilder("nodalPrice")
      .leftJoinAndSelect("nodalPrice.market", "market")
      .leftJoinAndSelect("nodalPrice.node", "node");

    qb.where("market.id = :id", { id: query.marketId });

    const nodalPriceCount = await qb.getCount();
    const nodalPrices = await qb.getMany();

    return [nodalPrices, nodalPriceCount];
  }
}
