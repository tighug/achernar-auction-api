import { IsNotEmpty, IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class FindMarketResultsQuery {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  marketId: number;
}
