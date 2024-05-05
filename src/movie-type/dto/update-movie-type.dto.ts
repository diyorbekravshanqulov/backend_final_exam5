import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMovieTypeDto {
  @ApiPropertyOptional({
    description: 'The new type of the movie',
    example: 'Thriller',
  })
  @IsOptional()
  @IsString()
  type?: string;
}
