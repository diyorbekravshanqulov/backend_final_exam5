import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateSubscriptionDto {
  @ApiProperty({
    description: 'The ID of the movie to subscribe to',
    example: 1,
  })
  @IsInt()
  movie_id: number;

  @ApiProperty({ description: 'The ID of the user subscribing', example: 1 })
  @IsInt()
  user_id: number;
}
