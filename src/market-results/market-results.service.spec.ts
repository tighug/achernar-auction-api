import { Test, TestingModule } from "@nestjs/testing";
import { MarketResultsService } from "./market-results.service";

describe("MarketResultsService", () => {
  let service: MarketResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketResultsService]
    }).compile();

    service = module.get<MarketResultsService>(MarketResultsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
