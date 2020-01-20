import { IsNotEmpty, IsInt, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class FindNodalPricesQuery {
  @IsNotEmpty()
  @IsInt()
  marketId: number;
}
