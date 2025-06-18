import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({ description: 'National_ID' })
  @IsString()
  n_id: string;

  @ApiProperty({ description: 'First Name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Last Name' })
  @IsString()
  surname: string;

  @ApiProperty({ description: 'date-of-birth' })
  @IsString()
  dob: string; // ใช้ string เพื่อให้สอดคล้องกับ IsString

  @ApiProperty({ description: 'Gender' })
  @IsString()
  gender: string;

  @ApiProperty({ description: 'Citizenship' })
  @IsString()
  citizen: string;

  @ApiProperty({ description: 'Nationality' })
  @IsString()
  nationality: string;

  @ApiProperty({ description: 'Religion' })
  @IsString()
  religion: string;

  @ApiProperty({ description: 'Phone Number' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'Address' })
  @IsString()
  address: string;

  @ApiProperty({ description: 'Company ID', required: false })
  @IsString()
  companyId?: string;
}