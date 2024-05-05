import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsPositive, Min, IsOptional } from 'class-validator';

export class UpdateActorAwardDto {
  @ApiPropertyOptional({
    description: 'ID of the actor who received the award',
    type: Number,
    example: 1,
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  actor_id?: number;

  @ApiPropertyOptional({
    description: 'ID of the award received by the actor',
    type: Number,
    example: 1,
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  award_id?: number;

  @ApiPropertyOptional({
    description: 'Year the award was received',
    type: Number,
    example: 2022,
  })
  @IsOptional()
  @IsInt()
  @Min(1900)
  award_year?: number;
}
