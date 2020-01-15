import { Test, TestingModule } from "@nestjs/testing";
import { FeedersController } from "./feeders.controller";

describe("Feeders Controller", () => {
  let controller: FeedersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedersController]
    }).compile();

    controller = module.get<FeedersController>(FeedersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
