import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IUserCreationAttr {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: number;
  subscription: boolean
}

@Table({ tableName: 'user' })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({
    description: 'User ID',
    required: false,
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ description: 'User first name' })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({ description: 'User last name' })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({ description: 'User email' })
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ApiProperty({ description: 'User phone number' })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({ description: 'User age' })
  @Column({
    type: DataType.INTEGER,
  })
  age: number;

  @ApiProperty({ description: 'User subscription' })
  @Column({
    type: DataType.BOOLEAN,
  })
  subscription: boolean

}
