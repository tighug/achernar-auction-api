import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";
import { AuctionsController } from "./auctions.controller";
import { AuctionsProcessor } from "./auctions.processor";
import { AuctionsService } from "./auctions.service";
import { NodesModule } from "src/nodes/nodes.module";
import { WiresModule } from "src/wires/wires.module";
import { UsersModule } from "src/users/users.module";
import { BidsModule } from "src/bids/bids.module";
import { MarketsModule } from "src/markets/markets.module";
import { MarketResultsModule } from "src/market-results/market-results.module";
import { NodalPricesModule } from "src/nodal-prices/nodal-prices.module";
import { FlowTransitionsModule } from "src/flow-transitions/flow-transitions.module";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "auction"
    }),
    NodesModule,
    WiresModule
  ],
  controllers: [AuctionsController],
  providers: [AuctionsProcessor, AuctionsService]
})
export class AuctionsModule {}
