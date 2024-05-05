import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDto {
  @ApiProperty({
    description: 'The language name',
    example: 'English',
  })
  @IsString()
  @Length(1, 255)
  language: string;
}
