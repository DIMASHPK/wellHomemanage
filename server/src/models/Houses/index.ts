import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'configs/db';

export default class House extends Model {
  public id!: number;

  public address!: string;

  public building_material!: string;

  public area!: number;

  public land_area!: number;

  public quantity_of_rooms!: number;

  public description!: string;

  public price!: string;

  public price_per_meter!: string;

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
