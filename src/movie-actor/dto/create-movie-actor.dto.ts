import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieActorDto {
  @ApiProperty({ description: 'The ID of the movie', example: 1 })
  @IsInt()
  movie_id: number;

  @ApiProperty({ description: 'The ID of the actor', example: 1 })
  @IsInt()
  actor_id: number;
}
