import { IsNotEmpty, IsInt } from "class-validator";
import { Type } from "class-transformer";

export class FindFeederParam {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id: number;
}
