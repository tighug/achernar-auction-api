import { Controller, Get, Query } from "@nestjs/common";
import { WiresService } from "./wires.service";
import { WiresRO } from "./wire.interface";

@Controller("wires")
export class WiresController {
  constructor(private readonly _wiresService: WiresService) {}

  @Get()
  async findByFeederId(@Query("feeder_id") feederId: number): Promise<WiresRO> {
    return await this._wiresService.findByFeederId(feederId);
  }
}
