import { Test, TestingModule } from "@nestjs/testing";
import { NodalPricesService } from "./nodal-prices.service";

describe("NodalPricesService", () => {
  let service: NodalPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NodalPricesService]
    }).compile();

    service = module.get<NodalPricesService>(NodalPricesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
