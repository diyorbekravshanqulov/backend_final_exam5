import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface ILanguageCreationAttr {
  language: string;
}

@Table({ tableName: 'language' })
export class Language extends Model<Language, ILanguageCreationAttr> {
  @ApiProperty({
    description: 'The unique identifier of the language',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the language',
    example: 'English',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  language: string;
}
