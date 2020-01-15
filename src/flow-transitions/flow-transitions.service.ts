import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FlowTransition } from "./flow-transition.entity";
import { Repository } from "typeorm";
import { FlowTransitionsRO } from "./flow-transition.interface";
import { FlowTransitionsSerializer } from "./flow-transitions.serializer";

@Injectable()
export class FlowTransitionsService {
  constructor(
    @InjectRepository(FlowTransition)
    private readonly _flowTransitionsRepository: Repository<FlowTransition>
  ) {}

  async findByMarketId(marketId: number): Promise<FlowTransitionsRO> {
    const [
      flowTransitions,
      flowTransitionCount
    ] = await this._flowTransitionsRepository.findAndCount({
      relations: ["market", "wire"],
      where: {
        market: {
          id: marketId
        }
      }
    });
    const serializedFlowTransitions = flowTransitions.map(
      FlowTransitionsSerializer.serialize
    );

    return {
      flowTransitions: serializedFlowTransitions,
      flowTransitionCount
    };
  }
}
