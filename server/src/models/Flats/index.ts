import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'configs/db';

export default class Flat extends Model {
  public id!: number;

  public address!: string;

  public floor!: number;

  public numberOfStoreys!: number;

  public quantityOfRooms!: number;

  public buildingMaterial!: string;

  public typeOfHouse!: string;

  public area!: number;

  public description!: string;

  public price!: number;

  public pricePerMeter!: number;

  public commission!: number;

  public number!: string;

  public whoGave!: string;

  public stateOfLid!: string;

  public descriptionOfClient!: string;

  public managerOfObject!: string;

  public dateOfStartAd!: string;

  public dateOfSold!: string;

  public soldPrice!: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Flat.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    address: { type: DataTypes.STRING },
    floor: { type: DataTypes.INTEGER },
    numberOfStoreys: { type: DataTypes.INTEGER },
    quantityOfRooms: { type: DataTypes.INTEGER },
    buildingMaterial: { type: DataTypes.STRING },
    typeOfHouse: { type: DataTypes.STRING },
    area: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    pricePerMeter: { type: DataTypes.INTEGER },
    commission: { type: DataTypes.INTEGER },
    number: { type: DataTypes.STRING },
    whoGave: { type: DataTypes.STRING },
    stateOfLid: { type: DataTypes.STRING },
    descriptionOfClient: { type: DataTypes.STRING },
    managerOfObject: { type: DataTypes.STRING },
    dateOfStartAd: { type: DataTypes.DATE },
    dateOfSold: { type: DataTypes.DATE },
    soldPrice: { type: DataTypes.INTEGER },
  },
  {
    tableName: 'flats',
    timestamps: false,
    sequelize,
  }
);

Flat.sync({ alter: true }).then(() => console.log('Flats table created'));
