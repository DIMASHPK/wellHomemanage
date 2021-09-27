import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'configs/db';

export default class Exclusive extends Model {
  public id!: number;

  public address!: string;

  public type_of_house!: string;

  public floor!: number;

  public area!: number;

  public description!: string;

  public reserve_price!: number;

  public start_price!: number;

  public end_price!: number;

  public pre_sale_prepare!: Date[];

  public ad_start!: Date;

  public incoming_calls!: number;

  public incoming_social!: number;

  public crm_number_and_description_of_client!: string;

  public watching_days!: Date[];

  public sign_up_for_view!: number;

  public visited!: number;

  public offers!: number;

  public deposit!: Date;

  public deal!: Date;

  public commission!: number;

  public ad_cost!: number;

  public readonly created_at!: Date;

  public readonly updated_at!: Date;
}

Exclusive.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    address: { type: DataTypes.STRING },
    type_of_house: { type: DataTypes.STRING },
    floor: { type: DataTypes.INTEGER },
    area: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
    reserve_price: { type: DataTypes.INTEGER },
    start_price: { type: DataTypes.INTEGER },
    end_price: { type: DataTypes.INTEGER },
    pre_sale_prepare: { type: DataTypes.ARRAY(DataTypes.DATE) },
    ad_start: { type: DataTypes.DATE },
    incoming_calls: { type: DataTypes.INTEGER },
    incoming_social: { type: DataTypes.INTEGER },
    crm_number_and_description_of_client: { type: DataTypes.STRING },
    watching_days: { type: DataTypes.ARRAY(DataTypes.DATE) },
    sign_up_for_view: { type: DataTypes.INTEGER },
    visited: { type: DataTypes.INTEGER },
    offers: { type: DataTypes.INTEGER },
    deposit: { type: DataTypes.DATE },
    deal: { type: DataTypes.DATE },
    commission: { type: DataTypes.INTEGER },
    ad_cost: { type: DataTypes.INTEGER },
    created_at: { type: DataTypes.DATE, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: 'exclusive',
    sequelize,
    timestamps: false,
  }
);

Exclusive.sync({ alter: true }).then(() =>
  console.log('Exclusives table created')
);
