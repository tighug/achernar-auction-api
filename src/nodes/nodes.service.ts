import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Node } from "./node.entity";
import { FindNodesQuery } from "./node.dto";

@Injectable()
export class NodesService {
  constructor(
    @InjectRepository(Node)
    private readonly _nodeRepository: Repository<Node>
  ) {}

  async findAll(query: FindNodesQuery): Promise<[Node[], number]> {
    const qb = this._nodeRepository
      .createQueryBuilder("node")
      .leftJoinAndSelect("node.feeder", "feeder");

    qb.where("node.feeder.id = :id", { id: query.feederId });

    const nodeCount = await qb.getCount();
    const nodes = await qb.getMany();

    return [nodes, nodeCount];
  }

  async findOne(id: number): Promise<Node> {
    return await this._nodeRepository.findOne(id, { relations: ["feeder"] });
  }
}
