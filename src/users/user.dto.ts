import { IsNotEmpty, IsInt, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class CreateUserDTO {
  @IsNotEmpty()
  @IsInt()
  nodeId: number;

  @IsNotEmpty()
  @IsString()
  address: string;
}

export class FindUsersQuery {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  nodeId?: number;
}

export class FindUserParam {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id: number;
}
