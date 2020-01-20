import { IsNotEmpty, IsInt, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class RegisterInitFlowDTO {
  @IsNotEmpty()
  @IsInt()
  marketId: number;

  @IsNotEmpty()
  @IsInt()
  wireId: number;

  @IsNotEmpty()
  @IsNumber()
  nodeP: number;

  @IsNotEmpty()
  @IsNumber()
  nodeV: number;

  @IsNotEmpty()
  @IsNumber()
  lineI: number;
}

export class FindFlowTransitionsQuery {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  marketId: number;
}
