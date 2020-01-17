import { Test, TestingModule } from "@nestjs/testing";
import { FlowTransitionsService } from "./flow-transitions.service";

describe("FlowTransitionsService", () => {
  let service: FlowTransitionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlowTransitionsService]
    }).compile();

    service = module.get<FlowTransitionsService>(FlowTransitionsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
