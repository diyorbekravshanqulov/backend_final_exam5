import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface IAwardCrationAttr {
  award_name: string;
}

@Table({ tableName: 'award' })
export class Award extends Model<Award, IAwardCrationAttr> {
  @ApiProperty({
    description: 'The unique identifier of the award',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the award',
    example: 'Employee of the Month',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  award_name: string;
}
