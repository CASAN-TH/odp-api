import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdatePersonDto {
  @ApiPropertyOptional({ description: 'National_ID' })
  @IsString()
  @IsOptional()
  n_id?: string;

  @ApiPropertyOptional({ description: 'First Name' })
  @IsString()
  @IsOptional()
<<<<<<< HEAD
  name?: string;
=======
  dob: Date;
>>>>>>> f0b1e3a0e89eda1a9b78c7a048a0b979863eb652

  @ApiPropertyOptional({ description: 'Last Name' })
  @IsString()
  @IsOptional()
  surname?: string;

  @ApiPropertyOptional({ description: 'date-of-birth' })
  @IsString()
  @IsOptional()
<<<<<<< HEAD
  dob?: string;

  @ApiPropertyOptional({ description: 'Gender' })
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiPropertyOptional({ description: 'Citizenship' })
  @IsString()
  @IsOptional()
  citizen?: string;

  @ApiPropertyOptional({ description: 'Nationality' })
  @IsString()
  @IsOptional()
  nationality?: string;

  @ApiPropertyOptional({ description: 'Religion' })
  @IsString()
  @IsOptional()
  religion?: string;

  @ApiPropertyOptional({ description: 'Phone Number' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({ description: 'Address' })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({ description: 'Company ID' })
  @IsString()
  @IsOptional()
  companyId?: string;
}
=======
  citizen: string
  // @ApiPropertyOptional({ description: 'Email of the person' })
  // @IsEmail()
  // @IsOptional()
  // email: string;
  // @ApiPropertyOptional({ description: 'Phone Numbers of the person' })
  // @IsArray()
  // @IsOptional()
  // phoneNumbers: string[];
}
>>>>>>> f0b1e3a0e89eda1a9b78c7a048a0b979863eb652
