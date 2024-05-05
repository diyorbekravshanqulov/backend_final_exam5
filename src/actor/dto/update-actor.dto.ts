import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, MinLength, IsOptional } from 'class-validator';

export class UpdateActorDto {
  @ApiProperty({
    description: 'Full name of the actor',
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  full_name?: string;

  @ApiProperty({
    description: 'Age of the actor',
    example: 30,
  })
  @IsInt()
  @IsOptional()
  age?: number;

  @ApiProperty({
    description: 'Character played by the actor',
    example: 'Sherlock Holmes',
  })
  @IsString()
  @IsOptional()
  character?: string;
}
