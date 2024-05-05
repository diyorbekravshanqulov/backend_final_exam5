import { IsString, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLanguageDto {
  @ApiProperty({
    description: 'The updated language name (optional)',
    example: 'English',
  })
  @IsOptional()
  @IsString()
  @Length(1, 255)
  language?: string;
}
