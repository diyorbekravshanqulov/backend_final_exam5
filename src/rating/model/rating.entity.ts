import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface IRatingCreationAttr {
  movie_id: number;
  user_id: number;
}

@Table({ tableName: 'rating' })
export class Rating extends Model<Rating, IRatingCreationAttr> {
  @ApiProperty({
    description: 'The unique identifier of the rating',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    description: 'The ID of the movie being rated',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
  })
  movie_id: number;

  @ApiProperty({
    description: 'The ID of the user who rated the movie',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;
}
