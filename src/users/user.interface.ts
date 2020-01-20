import { NodeData } from "src/nodes/node.interface";

export interface UserData {
  id: number;
  node: NodeData;
  address: string;
}

export interface UserRO {
  user: UserData;
}

export interface UsersRO {
  users: UserData[];
  userCount: number;
}
