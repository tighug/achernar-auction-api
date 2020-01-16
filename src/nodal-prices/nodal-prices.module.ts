import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NodalPrice } from "./nodal-price.entity";
import { NodalPricesService } from "./nodal-prices.service";
import { NodalPricesController } from "./nodal-prices.controller";

@Module({
  imports: [TypeOrmModule.forFeature([NodalPrice])],
  providers: [NodalPricesService],
  controllers: [NodalPricesController],
  exports: [NodalPricesService]
})
export class NodalPricesModule {}
