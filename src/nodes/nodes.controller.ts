import { Controller, Get, Query } from "@nestjs/common";
import { NodesService } from "./nodes.service";
import { NodesRO } from "./node.interface";

@Controller("nodes")
export class NodesController {
  constructor(private readonly _nodesService: NodesService) {}

  @Get()
  async findByFeederId(@Query("feeder_id") feederId: number): Promise<NodesRO> {
    return await this._nodesService.findByFeederId(feederId);
  }
}
