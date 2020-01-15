import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Feeder } from "./feeder.entity";

@Injectable()
export class FeedersService {
  constructor(
    @InjectRepository(Feeder)
    private readonly _feederRepository: Repository<Feeder>
  ) {}

  async findAll(): Promise<[Feeder[], number]> {
    return await this._feederRepository.findAndCount();
  }
}
