import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Market } from "./market.entity";
import { Repository } from "typeorm";

@Injectable()
export class MarketsService {
  constructor(
    @InjectRepository(Market)
    private readonly _marketRepository: Repository<Market>
  ) {}

  async findByFeederId(feederId: number): Promise<[Market[], number]> {
    return await this._marketRepository.findAndCount({
      relations: ["feeder"],
      where: {
        feeder: {
          id: feederId
        }
      }
    });
  }
}
