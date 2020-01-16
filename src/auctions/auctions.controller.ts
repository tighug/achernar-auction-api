import { Controller, Post } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";
import { NodesService } from "src/nodes/nodes.service";
import { WiresService } from "src/wires/wires.service";
import { MarketsService } from "src/markets/markets.service";
import { BidsService } from "src/bids/bids.service";
import { FlowTransitionsService } from "src/flow-transitions/flow-transitions.service";

@Controller("auctions")
export class AuctionsController {
  constructor(
    @InjectQueue("auction")
    private readonly _auctionQueue: Queue,
    private readonly _nodesService: NodesService,
    private readonly _wiresService: WiresService,
    private readonly _marketsService: MarketsService,
    private readonly _bidsService: BidsService,
    private readonly _flowTransitionsService: FlowTransitionsService
  ) {}

  @Post("start")
  async start(): Promise<void> {
    await this.startAuction(1);
    // const job = await this._auctionQueue.add({ auction: "auction1" });
    // console.log("posted: ", job.id);
  }

  async startAuction(marketId: number): Promise<void> {
    const market = await this._marketsService.findById(marketId);
    const feederId = market.feeder.id;
    const [nodes, nodeCount] = await this._nodesService.findByFeederId(
      feederId
    );
    const [wires, wireCount] = await this._wiresService.findByFeederId(
      feederId
    );
    const [bids, bidCount] = await this._bidsService.findByMarketId(marketId);
    const [
      flowTransitions,
      flowTransitionCount
    ] = await this._flowTransitionsService.findByMarketId(marketId);
  }
}
