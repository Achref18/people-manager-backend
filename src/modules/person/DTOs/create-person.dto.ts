import { GenderEnum } from '@common/enums/gender.enum';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsEnum(GenderEnum)
  @IsNotEmpty()
  gender: string;
}
