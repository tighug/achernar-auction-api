import { Controller, Get, Query } from "@nestjs/common";
import { WiresService } from "./wires.service";
import { WiresRO } from "./wire.interface";
import { WiresSerializer } from "./wires.serializer";

@Controller("wires")
export class WiresController {
  constructor(private readonly _wiresService: WiresService) {}

  @Get()
  async findByFeederId(@Query("feeder_id") feederId: number): Promise<WiresRO> {
    const [wires, wireCount] = await this._wiresService.findByFeederId(feederId);

    return {
      wires: wires.map(WiresSerializer.serialize),
      wireCount
    }
  }
}
