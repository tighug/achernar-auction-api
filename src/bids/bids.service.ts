import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bid } from "./bid.entity";
import { Repository } from "typeorm";
import { FindBidsQuery } from "./bid.dto";

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Bid)
    private readonly _bidRepository: Repository<Bid>
  ) {}

  async findByMarketId(query: FindBidsQuery): Promise<[Bid[], number]> {
    const qb = this._bidRepository
      .createQueryBuilder("bid")
      .leftJoinAndSelect("bid.market", "market")
      .leftJoinAndSelect("bid.user", "user")
      .leftJoinAndSelect("user.node", "node");

    qb.where("1=1");

    if (query.marketId) qb.andWhere("market.id = :id", { id: query.marketId });
    if (query.userId) qb.andWhere("user.id = :id", { id: query.userId });
    if (query.bidType)
      qb.andWhere("bid.bidType = :type", { type: query.bidType });

    const bidCount = await qb.getCount();
    const bids = await qb.getMany();

    return [bids, bidCount];
  }
}
