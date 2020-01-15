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

  async findByFeederId(feederId: number): Promise<NodesRO> {
    const [nodes, nodeCount] = await this._nodeRepository.findAndCount({
      relations: ["feeder"],
      where: {
        feeder: {
          id: feederId
        }
      }
    });
    const serializedNodes = nodes.map(NodesSerializer.serialize);
    return {
      nodes: serializedNodes,
      nodeCount
    };
  }
}
