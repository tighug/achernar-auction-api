import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { FeedersModule } from "./feeders/feeders.module";
import { NodesModule } from "./nodes/nodes.module";
import { WiresModule } from "./wires/wires.module";
import { UsersModule } from "./users/users.module";
import { BidsModule } from "./bids/bids.module";
import { MarketsModule } from "./markets/markets.module";
import { MarketResultsModule } from "./market-results/market-results.module";
import { FlowsModule } from "./flows/flows.module";
import { NodalPricesModule } from "./nodal-prices/nodal-prices.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    FeedersModule,
    NodesModule,
    WiresModule,
    UsersModule,
    BidsModule,
    MarketsModule,
    MarketResultsModule,
    FlowsModule,
    NodalPricesModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
