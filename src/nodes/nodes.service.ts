import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Node } from "./node.entity";
import { NodesRO } from "./node.interface";
import { NodesSerializer } from "./nodes.serializer";

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
