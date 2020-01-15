import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Market } from "./market.entity";
import { Repository } from "typeorm";
import { MarketsRO } from "./market.interface";
import { MarketsSerializer } from "./markets.serializer";

@Injectable()
export class MarketsService {
  constructor(
    @InjectRepository(Market)
    private readonly _marketRepository: Repository<Market>
  ) {}

  async findByFeederId(feederId: number): Promise<MarketsRO> {
    const [markets, marketCount] = await this._marketRepository.findAndCount({
      relations: ["feeder"],
      where: {
        feeder: {
          id: feederId
        }
      }
    });
    const serializedMarkets = markets.map(MarketsSerializer.serialize);
    return {
      markets: serializedMarkets,
      marketCount
    };
  }
}
