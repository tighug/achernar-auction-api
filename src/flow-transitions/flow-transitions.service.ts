import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FlowTransition } from "./flow-transition.entity";
import { Flow } from "./flow.entity";
import { Repository } from "typeorm";
import { FindFlowTransitionsQuery } from "./flow-transition.dto";

@Injectable()
export class FlowTransitionsService {
  constructor(
    @InjectRepository(FlowTransition)
    private readonly _flowTransitionsRepository: Repository<FlowTransition>,
    @InjectRepository(Flow)
    private readonly _flowsRepository: Repository<Flow>
  ) {}

  async create({
    market,
    initFlow
  }: Partial<FlowTransition>): Promise<FlowTransition> {
    const flowTransition = this._flowTransitionsRepository.create({
      market,
      initFlow
    });

    return await this._flowTransitionsRepository.save(flowTransition);
  }

  async findAll(
    query: FindFlowTransitionsQuery
  ): Promise<[FlowTransition[], number]> {
    const qb = this._flowTransitionsRepository
      .createQueryBuilder("flowTransition")
      .leftJoinAndSelect("flowTransition.market", "market")
      .leftJoinAndSelect("flowTransition.initFlow", "initFlow")
      .leftJoinAndSelect("flowTransition.befFlow", "befFlow")
      .leftJoinAndSelect("flowTransition.aftFlow", "aftFlow")
      .leftJoinAndSelect("initFlow.wire", "initWire")
      .leftJoinAndSelect("befFlow.wire", "befWire")
      .leftJoinAndSelect("aftFlow.wire", "aftWire");

    qb.where("1=1");

    if (query.marketId) qb.andWhere("market.id = :id", { id: query.marketId });

    const flowTransitionCount = await qb.getCount();
    const flowTransitions = await qb.getMany();

    return [flowTransitions, flowTransitionCount];
  }

  async createFlow({
    wire,
    nodeP,
    nodeV,
    lineI
  }: Partial<Flow>): Promise<Flow> {
    const flowTransition = this._flowsRepository.create({
      wire,
      nodeP,
      nodeV,
      lineI
    });

    return await this._flowsRepository.save(flowTransition);
  }
}
