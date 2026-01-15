import { Test, TestingModule } from '@nestjs/testing';
import { MilitaryweaponsController } from './militaryweapons.controller';
import { MilitaryweaponsService } from './militaryweapons.service';

describe('MilitaryweaponsController', () => {
  let controller: MilitaryweaponsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilitaryweaponsController],
      providers: [MilitaryweaponsService],
    }).compile();

    controller = module.get<MilitaryweaponsController>(MilitaryweaponsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
