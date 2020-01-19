import { Test, TestingModule } from "@nestjs/testing";
import { FeedersController } from "./feeders.controller";
import { FeedersService } from "./feeders.service";
import { Feeder } from "./feeder.entity";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("Feeders Controller", () => {
  let controller: FeedersController;
  let service: FeedersService;
  let feeders: Feeder[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedersController],
      providers: [
        FeedersService,
        {
          provide: getRepositoryToken(Feeder),
          useValue: null
        }
      ]
    }).compile();

    controller = module.get<FeedersController>(FeedersController);
    service = module.get<FeedersService>(FeedersService);
    feeders = [
      {
        id: 1,
        networkNum: 1,
        feederNum: 1,
        nodeCount: 10,
        houseCount: 100
      },
      {
        id: 2,
        networkNum: 1,
        feederNum: 2,
        nodeCount: 20,
        houseCount: 200
      }
    ];
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("findAll", () => {
    it("OK", async () => {
      const expectedResult = {
        feeders: feeders,
        feederCount: 2
      };
      jest
        .spyOn(service, "findAll")
        .mockImplementation(async () => [feeders, feeders.length]);

      const result = await controller.findAll();

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
