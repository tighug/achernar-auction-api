import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Feeder } from "./feeder.entity";
import { FeedersRO } from "./feeder.interface";
import { FeedersSerializer } from "./feeders.serializer";

@Injectable()
export class FeedersService {
  constructor(
    @InjectRepository(Feeder)
    private readonly _feederRepository: Repository<Feeder>
  ) {}

  async findAll(): Promise<FeedersRO> {
    const [feeders, feederCount] = await this._feederRepository.findAndCount();
    const serializedFeeders = feeders.map(FeedersSerializer.serialize);

    return { feeders: serializedFeeders, feederCount };
  }
}
