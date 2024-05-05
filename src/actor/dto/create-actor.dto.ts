import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, MinLength, IsNotEmpty } from 'class-validator';

export class CreateActorDto {
  @ApiProperty({
    description: 'Full name of the actor',
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    description: 'Age of the actor',
    example: 30,
  })
  @IsInt()
  age: number;

  @ApiProperty({
    description: 'Character played by the actor',
    example: 'Sherlock Holmes',
  })
  @IsString()
  @IsNotEmpty()
  character: string;
}
