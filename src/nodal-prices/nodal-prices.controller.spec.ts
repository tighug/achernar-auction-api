import { Test, TestingModule } from '@nestjs/testing';
import { NodalPricesController } from './nodal-prices.controller';

describe('NodalPrices Controller', () => {
  let controller: NodalPricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodalPricesController],
    }).compile();

    controller = module.get<NodalPricesController>(NodalPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
