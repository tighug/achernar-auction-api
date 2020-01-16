import { Controller, Post } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";
import { NodesService } from "src/nodes/nodes.service";
import { WiresService } from "src/wires/wires.service";
import { MarketsService } from "src/markets/markets.service";

@Controller("auctions")
export class AuctionsController {
  constructor(
    @InjectQueue("auction")
    private readonly _auctionQueue: Queue,
    private readonly _nodesService: NodesService,
    private readonly _wiresService: WiresService
  ) {}

  @Post("start")
  async start(): Promise<void> {
    await this.startAuction(1);
    // const job = await this._auctionQueue.add({ auction: "auction1" });
    // console.log("posted: ", job.id);
  }

  async startAuction(feederId: number): Promise<void> {
    const [nodes, nodeCount] = await this._nodesService.findByFeederId(
      feederId
    );
    const [wires, wireCount] = await this._wiresService.findByFeederId(
      feederId
    );
  }
}
