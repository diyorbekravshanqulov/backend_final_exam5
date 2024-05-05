import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface IMovieTypeCreationAttr {
  type: string;
}

@Table({ tableName: 'movie-type' })
export class MovieType extends Model<MovieType, IMovieTypeCreationAttr> {
  @ApiProperty({
    description: 'The unique identifier of the movie type',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    description: 'The type of the movie',
    example: 'Action',
  })
  @Column({
    type: DataType.STRING,
  })
  type: string;
}
