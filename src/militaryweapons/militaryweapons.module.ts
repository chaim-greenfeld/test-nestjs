import { Module } from '@nestjs/common';
import { MilitaryweaponsService } from './militaryweapons.service';
import { MilitaryweaponsController } from './militaryweapons.controller';
import { DatabaseModule } from './database/databaseModule';
import { weaponsProviders } from './enteties/militaryweapons.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MilitaryweaponsController],
  providers: [MilitaryweaponsService, ...weaponsProviders],
})
export class MilitaryweaponsModule {}
