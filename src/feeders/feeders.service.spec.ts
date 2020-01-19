import { Test, TestingModule } from "@nestjs/testing";
import { FeedersService } from "./feeders.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Feeder } from "./feeder.entity";

describe("Feeders Service", () => {
  let service: FeedersService;
  let feeders: Feeder[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FeedersService,
        {
          provide: getRepositoryToken(Feeder),
          useValue: {
            findAndCount: async (): Promise<[Feeder[], number]> => [
              feeders,
              feeders.length
            ]
          }
        }
      ]
    }).compile();

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
    expect(service).toBeDefined();
  });

  describe("findAll", () => {
    it("OK", async () => {
      const result = await service.findAll();

      expect(result[0]).toBe(feeders);
      expect(result[1]).toBe(2);
    });
  });
});
