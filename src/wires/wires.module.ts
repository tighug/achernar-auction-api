import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Wire } from "./wire.entity";
import { WiresService } from "./wires.service";
import { WiresController } from "./wires.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Wire])],
  providers: [WiresService],
  controllers: [WiresController],
  exports: [WiresService]
})
export class WiresModule {}
