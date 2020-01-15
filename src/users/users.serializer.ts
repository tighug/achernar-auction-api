import { User } from "./user.entity";
import { UserData } from "./user.interface";
import { NodesSerializer } from "src/nodes/nodes.serializer";

export class UsersSerializer {
  static serialize(user: User): UserData {
    return {
      id: user.id,
      node: NodesSerializer.serialize(user.node),
      address: user.address
    };
  }
}
