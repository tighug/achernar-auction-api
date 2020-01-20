import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MarketResult } from "./market-result.entity";
import { Repository } from "typeorm";
import { FindMarketResultsQuery } from "./market-result.dto";

@Injectable()
export class MarketResultsService {
  constructor(
    @InjectRepository(MarketResult)
    private readonly _marketResultRepository: Repository<MarketResult>
  ) {}

  async findAll(
    query: FindMarketResultsQuery
  ): Promise<[MarketResult[], number]> {
    const qb = this._marketResultRepository
      .createQueryBuilder("marketResult")
      .leftJoinAndSelect("marketResult.market", "market");

    qb.where("market.id = :id", { id: query.marketId });

    const marketCount = await qb.getCount();
    const markets = await qb.getMany();

    return [markets, marketCount];
  }

  async create(marketResultData: Partial<MarketResult>): Promise<MarketResult> {
    const marketResult = this._marketResultRepository.create(marketResultData);

    return await this._marketResultRepository.save(marketResult);
  }
}
