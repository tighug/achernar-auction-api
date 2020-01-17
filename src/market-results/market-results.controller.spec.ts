import { Test, TestingModule } from "@nestjs/testing";
import { MarketResultsController } from "./market-results.controller";

describe("MarketResults Controller", () => {
  let controller: MarketResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketResultsController]
    }).compile();

    controller = module.get<MarketResultsController>(MarketResultsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
