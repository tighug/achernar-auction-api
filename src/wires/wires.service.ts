import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Wire } from "./wire.entity";
import { Repository } from "typeorm";
import { WiresSerializer } from "./wires.serializer";
import { WiresRO } from "./wire.interface";

@Injectable()
export class WiresService {
  constructor(
    @InjectRepository(Wire)
    private readonly _wireRepository: Repository<Wire>
  ) {}

  async findByFeederId(feederId: number): Promise<WiresRO> {
    const [wires, wireCount] = await this._wireRepository.findAndCount({
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
    const serializedWires = wires.map(WiresSerializer.serialize);

    return {
      wires: serializedWires,
      wireCount
    };
  }
}
