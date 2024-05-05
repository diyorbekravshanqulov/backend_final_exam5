import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsInt,
  Min,
  Max,
  IsBoolean,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User first name' })
  @IsString()
  first_name: string;

  @ApiProperty({ description: 'User last name' })
  @IsString()
  last_name: string;

  @ApiProperty({ description: 'User email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User phone number' })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ description: 'User age' })
  @IsInt()
  @Min(0)
  @Max(150)
  age: number;

  @ApiProperty({
    description: 'Flag indicating if the user is active',
    default: false,
  })
  @IsBoolean()
  is_active: boolean;
}
