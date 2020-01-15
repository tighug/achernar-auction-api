import { Controller, Get } from "@nestjs/common";
import { FeedersService } from "./feeders.service";
import { FeedersRO } from "./feeder.interface";

@Controller("feeders")
export class FeedersController {
  constructor(private readonly _feedersService: FeedersService) {}

  @Get()
  async findAll(): Promise<FeedersRO> {
    return await this._feedersService.findAll();
  }
}
