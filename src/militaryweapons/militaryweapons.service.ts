import { Injectable, Inject } from '@nestjs/common';
import { Weapons } from './enteties/militaryweapons.entety';
import { BuyWeapons } from './dto/buy-weapond.dto';



import fs from 'fs/promises';
import { PipeTransform,  ArgumentMetadata } from '@nestjs/common';



@Injectable()
export class MilitaryweaponsService {
    constructor(
        @Inject('WEAPONS_REPOSITORY')
        private weaponsRepository: typeof Weapons
    ) {}



    async purchaseItems(buyWeapons: BuyWeapons) {
        try{
            
            const data = await this.weaponsRepository.findOne({
                where: {id: buyWeapons.id}, raw:true
            });
            if(!data){
                const money = await fs.readFile('../txtFile/budget.txt', 'utf8')
                if (parseInt(money) - (buyWeapons.pricePerUnit * buyWeapons.quantity) < 0){
                    return 'you are not have enough money'
                }
                const moneyAfter = parseInt(money) - (buyWeapons.pricePerUnit * buyWeapons.quantity)
                fs.writeFile('../txtFile/budget.txt', String(moneyAfter), 'utf-8')
                return this.weaponsRepository.create({...buyWeapons})
            }
            const money = await fs.readFile('../txtFile/budget.txt', 'utf8')
                if (parseInt(money) - (buyWeapons.pricePerUnit * buyWeapons.quantity) < 0){
                    return 'you are not have enough money but it is exists'
                }
                const moneyAfter = parseInt(money) - (buyWeapons.pricePerUnit * buyWeapons.quantity)
                fs.writeFile('../txtFile/budget.txt', String(moneyAfter), 'utf-8')
    
                const updateData = {
                    id: data.id,
                    name: data.name,
                    type: data.type,
                    quantity: (data.quantity += buyWeapons.quantity),
                    pricePerUnit: data.pricePerUnit,
                    hasImage: data.hasImage
                }
                await this.weaponsRepository.update(updateData, {where: {id: buyWeapons.id}})
                const result1 = await this.weaponsRepository.findOne({where: {id: buyWeapons.id}, raw:true})
                return {"results": [
                    {id: result1?.id, "newQuantity": result1?.quantity, spent: (buyWeapons.pricePerUnit * buyWeapons.quantity)}
                ]}

        }catch(err){
            console.log(err.message)
        }
        


    }



}


@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    
    const oneKb = 1000;
    return value.size < oneKb;
  }
}
