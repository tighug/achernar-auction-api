import { IsNotEmpty, IsString, IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class CreateMarketDTO {
  @IsNotEmpty()
  @IsInt()
  readonly feederId: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;
}

export class FindMarketsQuery {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  feederId: number;
}

export class FindMarketParam {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id: number;
}
