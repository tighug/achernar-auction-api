import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>
  ) {}

  async findByNodeId(nodeId: number): Promise<User> {
    return await this._userRepository.findOne({
      relations: ["node"],
      where: {
        node: {
          id: nodeId
        }
      }
    });
  }
}
