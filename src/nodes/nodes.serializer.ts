import { Node } from "./node.entity";
import { NodeData } from "./node.interface";
import { FeedersSerializer } from "src/feeders/feeders.serializer";

export class NodesSerializer {
  static serialize(node: Node): NodeData {
    return {
      id: node.id,
      feeder: FeedersSerializer.serialize(node.feeder),
      num: node.num,
      posX: node.posX,
      posY: node.posY
    };
  }
}
