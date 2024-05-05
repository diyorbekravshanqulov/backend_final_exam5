import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt } from 'class-validator';

export class UpdateRatingDto {
  @ApiPropertyOptional({
    description: 'The new movie ID for the rating',
    example: 2,
  })
  @IsOptional()
  @IsInt()
  movie_id?: number;

  @ApiPropertyOptional({
    description: 'The new user ID for the rating',
    example: 2,
  })
  @IsOptional()
  @IsInt()
  user_id?: number;
}
