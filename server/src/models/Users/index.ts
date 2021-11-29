import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'configs/db';

export default class User extends Model {
  public id!: number;

  public username!: string;

  public password!: string;

  public readonly created_at!: Date;

  public readonly updated_at!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'users',
    sequelize,
    timestamps: false,
  }
);

User.sync({ alter: true }).then(() => console.log('Users table created'));
