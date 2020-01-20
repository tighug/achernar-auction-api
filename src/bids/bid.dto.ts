import { IsInt, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { BidType } from "./bid.entity";

export class FindBidsQuery {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  marketId: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  userId: number;

  @IsOptional()
  @IsEnum(BidType)
  bidType: BidType;
}
