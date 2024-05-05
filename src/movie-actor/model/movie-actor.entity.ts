import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface IMovieActorCreationAttr {
  movie_id: number;
  actor_id: number;
}

@Table({ tableName: 'movie-actor' })
export class MovieActor extends Model<MovieActor, IMovieActorCreationAttr> {
  @ApiProperty({
    description: 'The unique identifier of the movie-actor relationship',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    description: 'The ID of the movie',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
  })
  movie_id: number;

  @ApiProperty({
    description: 'The ID of the actor',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
  })
  actor_id: number;
}
