import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FlowTransition } from "./flow-transition.entity";
import { FlowTransitionsService } from "./flow-transitions.service";
import { FlowTransitionsController } from "./flow-transitions.controller";
import { Flow } from "./flow.entity";
import { MarketsModule } from "../markets/markets.module";
import { WiresModule } from "../wires/wires.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([FlowTransition, Flow]),
    MarketsModule,
    WiresModule
  ],
  providers: [FlowTransitionsService],
  controllers: [FlowTransitionsController],
  exports: [FlowTransitionsService]
})
export class FlowTransitionsModule {}
