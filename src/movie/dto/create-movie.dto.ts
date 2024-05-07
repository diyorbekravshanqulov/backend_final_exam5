import { IsString, IsInt, IsNumber, IsDate, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    description: 'URL of the movie photo',
    example: 'https://example.com/movie/photo.jpg',
  })
  @IsString()
  photo: string;

  @ApiProperty({ description: 'Title of the movie', example: 'Avatar' })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Release date of the movie',
    example: '2023-05-25',
  })
  @IsString()
  release_date: string;

  @ApiProperty({ description: 'ID of the language of the movie', example: 1 })
  @IsInt()
  Language_id: number;

  @ApiProperty({ description: 'Age limit of the movie', example: 13 })
  @IsInt()
  age_limit: number;

  @ApiProperty({
    description: 'Duration of the movie in minutes',
    example: 150,
  })
  @IsInt()
  duration: number;

  @ApiProperty({
    description: 'URL of the movie video',
    example: 'https://example.com/movie/video.mp4',
  })
  @IsString()
  video: string;

  @ApiProperty({ description: 'ID of the movie type', example: 1 })
  @IsInt()
  movieType_id: number;

  @ApiProperty({ description: 'Rating of the movie out of 10', example: 8.5 })
  @IsNumber()
  @Min(0)
  @Max(10)
  ratingOfNumber: number;
}
