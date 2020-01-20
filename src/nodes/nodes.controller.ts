import {
  Controller,
  Get,
  Query,
  Param,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { NodesService } from "./nodes.service";
import { NodesRO, NodeRO } from "./node.interface";
import { NodesSerializer } from "./nodes.serializer";
import { FindNodesQuery, FindNodeParam } from "./node.dto";

@Controller("nodes")
export class NodesController {
  constructor(private readonly _nodesService: NodesService) {}

  @Get()
  async findAll(@Query() query: FindNodesQuery): Promise<NodesRO> {
    const [nodes, nodeCount] = await this._nodesService.findAll(query);

    return {
      nodes: nodes.map(NodesSerializer.serialize),
      nodeCount
    };
  }

  @Get(":id")
  async findOne(@Param() { id }: FindNodeParam): Promise<NodeRO> {
    const node = await this._nodesService.findOne(id);

    if (!node) throw new HttpException("Not Found", HttpStatus.NOT_FOUND);

    return { node: NodesSerializer.serialize(node) };
  }
}
