import { Test, TestingModule } from '@nestjs/testing';
import { WiresService } from './wires.service';

describe('WiresService', () => {
  let service: WiresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WiresService],
    }).compile();

    service = module.get<WiresService>(WiresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
