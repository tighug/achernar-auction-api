import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Market } from "./market.entity";
import { Repository } from "typeorm";
import { FindMarketsQuery } from "./market.dto";

@Injectable()
export class MarketsService {
  constructor(
    @InjectRepository(Market)
    private readonly _marketRepository: Repository<Market>
  ) {}

  async create({ name, feeder }: Partial<Market>): Promise<Market> {
    const market = this._marketRepository.create({ name, feeder });

    return await this._marketRepository.save(market);
  }

  async findAll(query: FindMarketsQuery): Promise<[Market[], number]> {
    const qb = this._marketRepository
      .createQueryBuilder("market")
      .leftJoinAndSelect("market.feeder", "feeder");

    qb.where("1=1");

    if (query.feederId)
      qb.andWhere("market.feeder.id = :id", { id: query.feederId });

    const marketCount = await qb.getCount();
    const markets = await qb.getMany();

    return [markets, marketCount];
  }

  async findOne(id: number): Promise<Market> {
    return await this._marketRepository.findOne(id, { relations: ["feeder"] });
  }
}
