import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, Min } from 'class-validator';

export class CreateActorAwardDto {
  @ApiProperty({
    description: 'ID of the actor who received the award',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  actor_id: number;

  @ApiProperty({
    description: 'ID of the award received by the actor',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  award_id: number;

  @ApiProperty({
    description: 'Year the award was received',
    type: Number,
    example: 2022,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1900)
  award_year: number;
}
