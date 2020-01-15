import { Controller, Get } from "@nestjs/common";
import { FeedersService } from "./feeders.service";
import { FeedersRO } from "./feeder.interface";
import { FeedersSerializer } from "./feeders.serializer";

@Controller("feeders")
export class FeedersController {
  constructor(private readonly _feedersService: FeedersService) {}

  @Get()
  async findAll(): Promise<FeedersRO> {
    const [feeders, feederCount] = await this._feedersService.findAll();

    return {
      feeders: feeders.map(FeedersSerializer.serialize),
      feederCount
    };
  }
}
