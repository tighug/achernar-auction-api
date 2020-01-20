import { IsNotEmpty, IsNumberString, IsInt } from "class-validator";
import { Type } from "class-transformer";

export class FindNodesQuery {
  @IsNotEmpty()
  @IsNumberString()
  feederId: number;
}

export class FindNodeParam {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id: number;
}
