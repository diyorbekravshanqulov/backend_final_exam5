import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAwardDto {
  @ApiProperty({
    description: 'Name of the award',
    example: 'Employee of the Month',
  })
  @IsString()
  @Length(1, 255)
  award_name: string;
}
