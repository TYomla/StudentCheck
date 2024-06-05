import { IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';

export class CreateStudentDto {
  @IsInt()
  @IsNotEmpty()
  prefixid: number;

  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsInt()
  @IsNotEmpty()
  genderid: number;

  @IsDate()
  @IsNotEmpty()
  birthdate: Date;

  @IsInt()
  @IsNotEmpty()
  gradelevelid: number;
}
