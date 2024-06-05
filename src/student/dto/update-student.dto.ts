// update-student.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class UpdateStudentDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsNumber()
  prefixid: number;

  @IsNumber()
  genderid: number;

  @IsDate()
  birthdate: Date;

  @IsNumber()
  gradelevelid: number;
}
