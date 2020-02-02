import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  find(): string {
    return "Hello from auction-api";
  }
}
