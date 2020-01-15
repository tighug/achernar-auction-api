import { Controller, Get, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserRO } from "./user.interface";

@Controller("users")
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get()
  async findByNodeId(@Query("node_id") nodeId: number): Promise<UserRO> {
    return await this._usersService.findByNodeId(nodeId);
  }
}
