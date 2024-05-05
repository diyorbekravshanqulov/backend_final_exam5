import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateRatingDto {
  @ApiProperty({ description: 'The ID of the movie being rated', example: 1 })
  @IsInt()
  movie_id: number;

  @ApiProperty({
    description: 'The ID of the user who rated the movie',
    example: 1,
  })
  @IsInt()
  user_id: number;
}
