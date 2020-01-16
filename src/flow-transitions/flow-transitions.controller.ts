import { Controller, Get, Query } from "@nestjs/common";
import { FlowTransitionsService } from "./flow-transitions.service";
import { FlowTransitionsRO } from "./flow-transition.interface";
import { FlowTransitionsSerializer } from "./flow-transitions.serializer";

@Controller("flow-transitions")
export class FlowTransitionsController {
  constructor(
    private readonly _flowTransitonsService: FlowTransitionsService
  ) {}

  @Get()
  async findByMarketId(
    @Query("market_id") marketId: number
  ): Promise<FlowTransitionsRO> {
    const [
      flowTransitions,
      flowTransitionCount
    ] = await this._flowTransitonsService.findByMarketId(marketId);

    return {
      flowTransitions: flowTransitions.map(FlowTransitionsSerializer.serialize),
      flowTransitionCount
    };
  }
}
