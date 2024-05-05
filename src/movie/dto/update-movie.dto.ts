import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsNumber,
  IsDate,
  Min,
  Max,
  IsOptional,
} from 'class-validator';

export class UpdateMovieDto {
  @ApiPropertyOptional({
    description: 'URL of the movie photo',
    example: 'https://example.com/movie/photo.jpg',
  })
  @IsOptional()
  @IsString()
  photo?: string;

  @ApiPropertyOptional({ description: 'Title of the movie', example: 'Avatar' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Release date of the movie',
    example: '2023-05-25',
  })
  @IsOptional()
  @IsDate()
  release_date?: Date;

  @ApiPropertyOptional({
    description: 'ID of the language of the movie',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  Language_id?: number;

  @ApiPropertyOptional({ description: 'Age limit of the movie', example: 13 })
  @IsOptional()
  @IsInt()
  age_limit?: number;

  @ApiPropertyOptional({
    description: 'Duration of the movie in minutes',
    example: 150,
  })
  @IsOptional()
  @IsInt()
  duration?: number;

  @ApiPropertyOptional({
    description: 'URL of the movie video',
    example: 'https://example.com/movie/video.mp4',
  })
  @IsOptional()
  @IsString()
  video?: string;

  @ApiPropertyOptional({ description: 'ID of the movie type', example: 1 })
  @IsOptional()
  @IsInt()
  movieType_id?: number;

  @ApiPropertyOptional({
    description: 'Rating of the movie out of 10',
    example: 8.5,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  ratingOfNumber?: number;
}
