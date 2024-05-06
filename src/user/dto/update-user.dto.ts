import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsInt,
  Min,
  Max,
  IsBoolean,
} from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ description: 'Updated first name of the user' })
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiPropertyOptional({ description: 'Updated last name of the user' })
  @IsOptional()
  @IsString()
  last_name?: string;

  @ApiPropertyOptional({ description: 'Updated email of the user' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Updated phone number of the user' })
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @ApiPropertyOptional({ description: 'Updated age of the user' })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(150)
  age?: number;
}
