import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { UserRO } from "./user.interface";
import { UsersSerializer } from "./users.serializer";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>
  ) {}

  async findByNodeId(nodeId: number): Promise<UserRO> {
    const user = await this._userRepository.findOne({
      relations: ["node"],
      where: {
        node: {
          id: nodeId
        }
      }
    });
    const serializedUser = UsersSerializer.serialize(user);

    return { user: serializedUser };
  }
}
