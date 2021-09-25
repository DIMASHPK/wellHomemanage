import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'configs/db';

export default class House extends Model {
  public id!: number;

  public address!: string;

  public buildingMaterial!: string;

  public area!: number;

  public landArea!: number;

  public quantityOfRooms!: number;

  public description!: string;

  public price!: string;

  public pricePerMeter!: string;

  public commission!: number;

  public number!: string;

  public whoGave!: string;

  public stateOfLid!: string;

  public descriptionOfClient!: string;

  public managerOfObject!: string;

  public dateOfStartAd!: Date;

  public dateOfSold!: Date;

  public soldPrice!: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

House.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    address: { type: DataTypes.STRING },
    building_material: { type: DataTypes.STRING },
    area: { type: DataTypes.INTEGER },
    land_area: { type: DataTypes.INTEGER },
    quantity_of_rooms: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    price_per_meter: { type: DataTypes.INTEGER },
    commission: { type: DataTypes.INTEGER },
    number: { type: DataTypes.STRING },
    who_gave: { type: DataTypes.STRING },
    state_of_lid: { type: DataTypes.STRING },
    description_of_client: { type: DataTypes.STRING },
    manager_of_object: { type: DataTypes.STRING },
    date_of_start_ad: { type: DataTypes.DATE },
    date_of_sold: { type: DataTypes.DATE },
    sold_price: { type: DataTypes.INTEGER },
    created_at: { type: DataTypes.DATE, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: 'houses',
    sequelize,
    timestamps: false,
  }
);

House.sync({ alter: true }).then(() => console.log('Houses table created'));
