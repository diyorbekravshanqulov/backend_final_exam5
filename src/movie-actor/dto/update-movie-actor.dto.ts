import { IsOptional, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMovieActorDto {
  @ApiPropertyOptional({
    description: 'The ID of the movie to update in the relationship',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  movie_id?: number;

  @ApiPropertyOptional({
    description: 'The ID of the actor to update in the relationship',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  actor_id?: number;
}
