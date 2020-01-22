import { Injectable } from "@nestjs/common";
import { NodesService } from "../nodes/nodes.service";
import { WiresService } from "../wires/wires.service";
import { MarketsService } from "../markets/markets.service";
import { BidsService } from "../bids/bids.service";
import { FlowTransitionsService } from "../flow-transitions/flow-transitions.service";

@Injectable()
export class AuctionsService {
  constructor(
    private readonly _nodesService: NodesService,
    private readonly _wiresService: WiresService,
    private readonly _marketsService: MarketsService,
    private readonly _bidsService: BidsService,
    private readonly _flowTransitionsService: FlowTransitionsService
  ) {}

  async startAuction(marketId: number): Promise<void> {
    // const market = await this._marketsService.findById(marketId);
    // const feederId = market.feeder.id;
    // // const [nodes, nodeCount] = await this._nodesService.findAll(feederId);
    // const [wires, wireCount] = await this._wiresService.findAll(feederId);
    // const [bids, bidCount] = await this._bidsService.findByMarketId(marketId);
    // const [
    //   flowTransitions,
    //   flowTransitionCount
    // ] = await this._flowTransitionsService.findByMarketId(marketId);
  }
}
