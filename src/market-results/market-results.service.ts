import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MarketResult } from "./market-result.entity";
import { Repository } from "typeorm";
import { MarketResultsRO } from "./market-result.interface";
import { MarketResultsSerializer } from "./market-results.serializer";

@Injectable()
export class MarketResultsService {
  constructor(
    @InjectRepository(MarketResult)
    private readonly _marketResultRepository: Repository<MarketResult>
  ) {}

  async findByMarketId(marketId: number): Promise<MarketResultsRO> {
    const [
      marketResults,
      marketResultCount
    ] = await this._marketResultRepository.findAndCount({
      relations: ["market"],
      where: {
        market: {
          id: marketId
        }
      }
    });
    const serializedMarketResults = marketResults.map(
      MarketResultsSerializer.serialize
    );

    return {
      marketResults: serializedMarketResults,
      marketResultCount
    };
  }
}
