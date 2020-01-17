import { Test, TestingModule } from "@nestjs/testing";
import { FlowTransitionsController } from "./flow-transitions.controller";

describe("FlowTransitions Controller", () => {
  let controller: FlowTransitionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowTransitionsController]
    }).compile();

    controller = module.get<FlowTransitionsController>(
      FlowTransitionsController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
