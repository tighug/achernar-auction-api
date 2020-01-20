import { IsNotEmpty, IsInt } from "class-validator";
import { Type } from "class-transformer";

export class FindWiresQuery {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  feederId: number;
}

export class FindWireParam {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id: number;
}
