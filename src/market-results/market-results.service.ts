import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MarketResult } from "./market-result.entity";
import { Repository } from "typeorm";

@Injectable()
export class MarketResultsService {
  constructor(
    @InjectRepository(MarketResult)
    private readonly _marketResultRepository: Repository<MarketResult>
  ) {}

  async findByMarketId(marketId: number): Promise<[MarketResult[], number]> {
    return await this._marketResultRepository.findAndCount({
      relations: ["market"],
      where: {
        market: {
          id: marketId
        }
      }
    });
  }
}
