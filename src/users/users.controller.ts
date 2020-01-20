import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Param
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersRO, UserRO } from "./user.interface";
import { UsersSerializer } from "./users.serializer";
import { FindUsersQuery, CreateUserDTO, FindUserParam } from "./user.dto";
import { NodesService } from "src/nodes/nodes.service";

@Controller("users")
export class UsersController {
  constructor(
    private readonly _usersService: UsersService,
    private readonly _nodesService: NodesService
  ) {}

  @Post()
  async create(@Body() { nodeId, address }: CreateUserDTO): Promise<UserRO> {
    const node = await this._nodesService.findOne(nodeId);

    if (!node)
      throw new HttpException("Given nodeId is invalid.", HttpStatus.NOT_FOUND);

    const user = await this._usersService.create({ node, address });

    return { user: UsersSerializer.serialize(user) };
  }

  @Get()
  async findAll(@Query() query: FindUsersQuery): Promise<UsersRO> {
    const [users, userCount] = await this._usersService.findAll(query);

    return {
      users: users.map(UsersSerializer.serialize),
      userCount
    };
  }

  @Get(":id")
  async findOne(@Param() { id }: FindUserParam): Promise<UserRO> {
    const user = await this._usersService.findOne(id);

    if (!user) throw new HttpException("Not Found", HttpStatus.NOT_FOUND);

    return { user: UsersSerializer.serialize(user) };
  }
}
