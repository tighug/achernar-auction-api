import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { FindUsersQuery } from "./user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>
  ) {}

  async create({ node, address }: Partial<User>): Promise<User> {
    const user = this._userRepository.create({ node, address });

    return await this._userRepository.save(user);
  }

  async findAll(query: FindUsersQuery): Promise<[User[], number]> {
    const qb = this._userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.node", "node")
      .leftJoinAndSelect("node.feeder", "feeder");

    qb.where("1=1");

    if (query.nodeId) qb.andWhere("user.node.id = :id", { id: query.nodeId });

    const userCount = await qb.getCount();
    const users = await qb.getMany();

    return [users, userCount];
  }

  async findOne(id: number): Promise<User> {
    return await this._userRepository.findOne(id, {
      relations: ["node", "node.feeder"]
    });
  }
}
