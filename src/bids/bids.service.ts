import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bid } from "./bid.entity";
import { Repository } from "typeorm";

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Bid)
    private readonly _bidRepository: Repository<Bid>
  ) {}

  async findByMarketId(marketId: number): Promise<[Bid[], number]> {
    return await this._bidRepository.findAndCount({
      relations: ["market", "user"],
      where: {
        market: {
          id: marketId
        }
      }
    });
  }
}
