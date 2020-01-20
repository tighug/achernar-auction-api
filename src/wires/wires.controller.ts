import {
  Controller,
  Get,
  Query,
  Param,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { WiresService } from "./wires.service";
import { WiresRO, WireRO } from "./wire.interface";
import { WiresSerializer } from "./wires.serializer";
import { FindWiresQuery, FindWireParam } from "./wire.dto";

@Controller("wires")
export class WiresController {
  constructor(private readonly _wiresService: WiresService) {}

  @Get()
  async findAll(@Query() query: FindWiresQuery): Promise<WiresRO> {
    const [wires, wireCount] = await this._wiresService.findAll(query);

    return {
      wires: wires.map(WiresSerializer.serialize),
      wireCount
    };
  }

  @Get(":id")
  async findOne(@Param() { id }: FindWireParam): Promise<WireRO> {
    const wire = await this._wiresService.findOne(id);

    if (!wire) throw new HttpException("Not Found", HttpStatus.NOT_FOUND);

    return { wire: WiresSerializer.serialize(wire) };
  }
}
