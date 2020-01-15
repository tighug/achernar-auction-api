import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bid } from "./bid.entity";
import { Repository } from "typeorm";
import { BidsRO } from "./bid.interface";
import { BidsSerializer } from "./bids.serializer";

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Bid)
    private readonly _bidRepository: Repository<Bid>
  ) {}

  async findByMarketId(marketId: number): Promise<BidsRO> {
    const [bids, bidCount] = await this._bidRepository.findAndCount({
      relations: ["market", "user"],
      where: {
        market: {
          id: marketId
        }
      }
    });
    const serializedBids = bids.map(BidsSerializer.serialize);

    return {
      bids: serializedBids,
      bidCount
    };
  }
}
