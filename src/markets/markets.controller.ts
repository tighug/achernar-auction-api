import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Param
} from "@nestjs/common";
import { MarketsService } from "./markets.service";
import { MarketsRO, MarketRO } from "./market.interface";
import { MarketsSerializer } from "./markets.serializer";
import { FeedersService } from "src/feeders/feeders.service";
import {
  FindMarketsQuery,
  CreateMarketDTO,
  FindMarketParam
} from "./market.dto";

@Controller("markets")
export class MarketsController {
  constructor(
    private readonly _marketsService: MarketsService,
    private readonly _feedersService: FeedersService
  ) {}

  @Post()
  async create(@Body() { feederId, name }: CreateMarketDTO): Promise<MarketRO> {
    const feeder = await this._feedersService.findOne(feederId);

    if (!feeder)
      throw new HttpException(
        "Given feederId is invalid.",
        HttpStatus.NOT_FOUND
      );

    const market = await this._marketsService.create({ feeder, name });

    return { market };
  }

  @Get()
  async findAll(@Query() query: FindMarketsQuery): Promise<MarketsRO> {
    const [markets, marketCount] = await this._marketsService.findAll(query);

    return {
      markets: markets.map(MarketsSerializer.serialize),
      marketCount
    };
  }

  @Get(":id")
  async findOne(@Param() { id }: FindMarketParam): Promise<MarketRO> {
    const market = await this._marketsService.findOne(id);

    if (!market) throw new HttpException("Not Found", HttpStatus.NOT_FOUND);

    return { market: MarketsSerializer.serialize(market) };
  }
}
