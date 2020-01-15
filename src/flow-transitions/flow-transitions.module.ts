import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FlowTransition } from "./flow-transition.entity";
import { FlowTransitionsService } from './flow-transitions.service';

@Module({
  imports: [TypeOrmModule.forFeature([FlowTransition])],
  providers: [FlowTransitionsService]
})
export class FlowTransitionsModule {}
