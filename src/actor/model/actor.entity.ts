import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IActorCreationAttr {
  full_name: string;
  age: number;
  character: string;
}

@Table({ tableName: 'actor' })
export class Actor extends Model<Actor, IActorCreationAttr> {
  @ApiProperty({
    description: 'Actor ID',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    description: 'fullname of the actor',
  })
  @Column({
    type: DataType.STRING,
  })
  full_name: string;

  @ApiProperty({
    description: 'Age of the actor',
  })
  @Column({
    type: DataType.INTEGER,
  })
  age: number;

  @ApiProperty({
    description: 'Character played by the actor',
  })
  @Column({
    type: DataType.STRING,
  })
  character: string;
}
