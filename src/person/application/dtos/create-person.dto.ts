import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({ description: 'National_ID' })
  @IsString()
  n_id: string;
  @ApiProperty({ description: 'Fullname' })
  @IsString()
  name: string;
  @ApiProperty({ description: 'date-of-birth' })
  @IsString()
  dob: Date;
  @ApiProperty({ description: 'Gender' })
  @IsString()
  gender: string;
  @ApiProperty({ description: 'Citizenship' })
  @IsString()
  citizen: string;


  companyId: string;
}