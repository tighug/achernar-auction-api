import { Controller, Get, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserRO } from "./user.interface";
import { UsersSerializer } from "./users.serializer";

@Controller("users")
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get()
  async findByNodeId(@Query("node_id") nodeId: number): Promise<UserRO> {
    const user = await this._usersService.findByNodeId(nodeId);

    return {
      user: UsersSerializer.serialize(user)
    };
  }
}
