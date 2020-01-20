import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { FeedersService } from "./feeders.service";
import { FeedersRO, FeederRO } from "./feeder.interface";
import { FeedersSerializer } from "./feeders.serializer";
import { FindFeederParam } from "./feeder.dto";

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

  @Get(":id")
  async findOne(@Param() { id }: FindFeederParam): Promise<FeederRO> {
    const feeder = await this._feedersService.findOne(id);

    if (!feeder) throw new HttpException("Not Found", HttpStatus.NOT_FOUND);

    return { feeder: FeedersSerializer.serialize(feeder) };
  }
}
