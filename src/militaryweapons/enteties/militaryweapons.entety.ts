
import { Table, Column, Model, DataType, AllowNull, Unique, PrimaryKey} from 'sequelize-typescript';

@Table
export class Weapons extends Model {

    
    @PrimaryKey
    @Unique
    @Column
    declare id:number;
    
    @AllowNull(false)
    @Column({type: DataType.STRING})
    name: string;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    type: string;

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    quantity: number;

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    pricePerUnit: number;

    @AllowNull(false)
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    hasImage: boolean

}
