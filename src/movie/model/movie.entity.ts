import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Language } from 'src/language/model/language.entity';
import { MovieType } from 'src/movie-type/model/movie-type.entity';

interface IMovieCreationAttr {
  photo: string;
  title: string;
  release_date: Date;
  Language_id: number;
  age_limit: number;
  duration: number;
  video: string;
  movieType_id: number;
  ratingOfNumber: number;
}

@Table({ tableName: 'movie' })
export class Movie extends Model<Movie, IMovieCreationAttr> {
  @ApiProperty({
    description: 'The unique identifier of the movie',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    description: 'URL of the movie photo',
    example: 'https://example.com/movie/photo.jpg',
  })
  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @ApiProperty({
    description: 'Title of the movie',
    example: 'Avatar',
  })
  @Column({
    type: DataType.STRING,
  })
  title: string;

  @ApiProperty({
    description: 'Release date of the movie',
    example: '2023-05-25',
  })
  @Column({
    type: DataType.DATE,
    defaultValue: Date.now(),
  })
  release_date: Date;

  @ForeignKey(() => Language)
  @ApiProperty({
    description: 'ID of the language of the movie',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
  })
  Language_id: number;

  @ApiProperty({
    description: 'Age limit of the movie',
    example: 13,
  })
  @Column({
    type: DataType.INTEGER,
  })
  age_limit: number;

  @ApiProperty({
    description: 'Duration of the movie in minutes',
    example: 150,
  })
  @Column({
    type: DataType.INTEGER,
  })
  duration: number;

  @ApiProperty({
    description: 'URL of the movie video',
    example: 'https://example.com/movie/video.mp4',
  })
  @Column({
    type: DataType.STRING,
  })
  video: string;


  @ForeignKey(() => MovieType)
  @ApiProperty({
    description: 'ID of the movie type',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
  })
  movieType_id: number;

  @ApiProperty({
    description: 'Rating of the movie out of 10',
    example: 8.5,
  })
  @Column({
    type: DataType.INTEGER,
  })
  ratingOfNumber: number;

  @BelongsTo(() => Language)
  lang: Language

  @BelongsTo(() => MovieType)
  movieTypes: MovieType
}
