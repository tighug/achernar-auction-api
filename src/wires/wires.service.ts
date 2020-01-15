import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Wire } from "./wire.entity";
import { Repository } from "typeorm";

@Injectable()
export class WiresService {
  constructor(
    @InjectRepository(Wire)
    private readonly _wireRepository: Repository<Wire>
  ) {}

  async findByFeederId(feederId: number): Promise<[Wire[], number]> {
    return await this._wireRepository.findAndCount({
      relations: [
        "feeder",
        "node",
        "prevNode",
        "node.feeder",
        "prevNode.feeder"
      ],
      where: {
        feeder: {
          id: feederId
        }
      }
    });
  }
}
