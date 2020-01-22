import { Controller, Post, Query } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";
import { AuctionsService } from "./auctions.service";

@Controller("auctions")
export class AuctionsController {
  constructor(
    @InjectQueue("auction")
    private readonly _auctionQueue: Queue,
    private readonly _auctionsService: AuctionsService
  ) {}

  @Post("start")
  async start(@Query("market_id") marketId: number): Promise<void> {
    const auction = await this._auctionsService.startAuction(marketId);

    // const job = await this._auctionQueue.add({ auction: "auction1" });
    // console.log("posted: ", job.id);
  }
}
