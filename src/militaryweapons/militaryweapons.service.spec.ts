import { Test, TestingModule } from '@nestjs/testing';
import { MilitaryweaponsService } from './militaryweapons.service';

describe('MilitaryweaponsService', () => {
  let service: MilitaryweaponsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilitaryweaponsService],
    }).compile();

    service = module.get<MilitaryweaponsService>(MilitaryweaponsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
