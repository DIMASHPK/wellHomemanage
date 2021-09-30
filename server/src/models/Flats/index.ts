import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'configs/db';

export default class Flat extends Model {
  public id!: number;

  public address!: string;

  public floor!: number;

  public number_of_storeys!: number;

  public quantity_of_rooms!: number;

  public building_material!: string;

  public type_of_house!: string;

  public area!: number;

  public description!: string;

  public price!: number;

  public price_per_meter!: number;

  public commission!: number;

  public number!: string;

  public who_gave!: string;

  public state_of_lid!: string;

  public description_of_client!: string;

  public manager_of_object!: string;

  public date_of_start_ad!: Date;

  public date_of_sold!: Date;

  public sold_price!: number;

  public readonly created_at!: Date;

  public readonly updated_at!: Date;
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
    number_of_storeys: { type: DataTypes.INTEGER },
    quantity_of_rooms: { type: DataTypes.INTEGER },
    building_material: { type: DataTypes.STRING },
    type_of_house: { type: DataTypes.STRING },
    area: { type: DataTypes.INTEGER },
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
    tableName: 'flats',
    sequelize,
    timestamps: false,
  }
);

Flat.sync({ alter: true }).then(() => console.log('Flats table created'));
