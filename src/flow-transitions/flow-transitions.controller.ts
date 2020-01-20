import {
  Controller,
  Get,
  Query,
  Post,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { FlowTransitionsService } from "./flow-transitions.service";
import {
  FlowTransitionsRO,
  FlowTransitionRO
} from "./flow-transition.interface";
import { FlowTransitionsSerializer } from "./flow-transitions.serializer";
import {
  FindFlowTransitionsQuery,
  RegisterInitFlowDTO
} from "./flow-transition.dto";
import { MarketsService } from "src/markets/markets.service";
import { WiresService } from "src/wires/wires.service";

@Controller("flowTransitions")
export class FlowTransitionsController {
  constructor(
    private readonly _flowTransitonsService: FlowTransitionsService,
    private readonly _marketsService: MarketsService,
    private readonly _wiresService: WiresService
  ) {}

  @Post()
  async create({
    marketId,
    wireId,
    nodeP,
    nodeV,
    lineI
  }: RegisterInitFlowDTO): Promise<FlowTransitionRO> {
    const market = await this._marketsService.findOne(marketId);

    if (!market)
      throw new HttpException(
        "Given marketId is invalid",
        HttpStatus.NOT_FOUND
      );

    const wire = await this._wiresService.findOne(wireId);

    if (!wire)
      throw new HttpException("Given wireId is invalid", HttpStatus.NOT_FOUND);

    const initFlow = await this._flowTransitonsService.createFlow({
      wire,
      nodeP,
      nodeV,
      lineI
    });

    const flowTransition = await this._flowTransitonsService.create({
      market,
      initFlow
    });

    return {
      flowTransition: FlowTransitionsSerializer.serialize(flowTransition)
    };
  }

  @Get()
  async findAll(
    @Query() query: FindFlowTransitionsQuery
  ): Promise<FlowTransitionsRO> {
    const [
      flowTransitions,
      flowTransitionCount
    ] = await this._flowTransitonsService.findAll(query);

    return {
      flowTransitions: flowTransitions.map(FlowTransitionsSerializer.serialize),
      flowTransitionCount
    };
  }
}
