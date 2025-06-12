import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({ description: 'Name of the person' })
  @IsString()
  name: string;
  @ApiProperty({ description: 'Surname of the person' })
  @IsString()
  surname: string;

  companyId: string;
}