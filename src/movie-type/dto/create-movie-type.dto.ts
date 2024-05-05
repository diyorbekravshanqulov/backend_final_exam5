import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieTypeDto {
  @ApiProperty({ description: 'The type of the movie', example: 'Action' })
  type: string;
}
