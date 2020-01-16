import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FlowTransition } from "./flow-transition.entity";
import { Repository } from "typeorm";

@Injectable()
export class FlowTransitionsService {
  constructor(
    @InjectRepository(FlowTransition)
    private readonly _flowTransitionsRepository: Repository<FlowTransition>
  ) {}

  async findByMarketId(marketId: number): Promise<[FlowTransition[], number]> {
    return await this._flowTransitionsRepository.findAndCount({
      relations: ["market", "wire"],
      where: {
        market: {
          id: marketId
        }
      }
    });
  }
}
