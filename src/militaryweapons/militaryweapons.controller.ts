import { Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { MilitaryweaponsService } from './militaryweapons.service';
import { BuyWeapons } from './dto/buy-weapond.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('militaryweapons')
export class MilitaryweaponsController {
  constructor(private readonly militaryweaponsService: MilitaryweaponsService) {}


  

  @Post('buy')
  purchaseItems(@Body() buyWeapons:BuyWeapons){
    return this.militaryweaponsService.purchaseItems(buyWeapons)
  }

  
@Post('upload')
@UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
}

}
