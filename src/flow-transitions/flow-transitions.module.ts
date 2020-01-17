import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FlowTransition } from "./flow-transition.entity";
import { FlowTransitionsService } from "./flow-transitions.service";
import { FlowTransitionsController } from "./flow-transitions.controller";

@Module({
  imports: [TypeOrmModule.forFeature([FlowTransition])],
  providers: [FlowTransitionsService],
  controllers: [FlowTransitionsController],
  exports: [FlowTransitionsService]
})
export class FlowTransitionsModule {}
