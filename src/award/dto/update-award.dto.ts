import { IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAwardDto {
  @ApiProperty({
    description: 'Name of the award (optional)',
    example: 'Employee of the Month',
  })
  @IsOptional()
  @IsString()
  @Length(1, 255)
  award_name?: string;
}
