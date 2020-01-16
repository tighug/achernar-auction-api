import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Node } from "./node.entity";

@Injectable()
export class NodesService {
  constructor(
    @InjectRepository(Node)
    private readonly _nodeRepository: Repository<Node>
  ) {}

  async findByFeederId(feederId: number): Promise<[Node[], number]> {
    return await this._nodeRepository.findAndCount({
      relations: ["feeder"],
      where: {
        feeder: {
          id: feederId
        }
      }
    });
  }
}
