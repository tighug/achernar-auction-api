import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Wire } from "./wire.entity";
import { Repository } from "typeorm";
import { FindWiresQuery } from "./wire.dto";

@Injectable()
export class WiresService {
  constructor(
    @InjectRepository(Wire)
    private readonly _wireRepository: Repository<Wire>
  ) {}

  async findAll(query: FindWiresQuery): Promise<[Wire[], number]> {
    const qb = this._wireRepository
      .createQueryBuilder("wire")
      .leftJoinAndSelect("wire.node", "node")
      .leftJoinAndSelect("wire.prevNode", "prevNode")
      .leftJoinAndSelect("node.feeder", "feeder")
      .leftJoinAndSelect("prevNode.feeder", "prevFeeder");

    qb.where("feeder.id = :id", { id: query.feederId });

    const wireCount = await qb.getCount();
    const wires = await qb.getMany();

    return [wires, wireCount];
  }

  async findOne(id: number): Promise<Wire> {
    return this._wireRepository.findOne(id, {
      relations: ["node", "prevNode", "node.feeder", "prevNode.feeder"]
    });
  }
}
