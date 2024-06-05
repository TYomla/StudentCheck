import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateClassroomDto {
  @IsString()
  @IsNotEmpty()
  classname: string;

  @IsInt()
  @IsNotEmpty()
  academic_year: number;

  @IsString()
  @IsNotEmpty()
  homeroom_teacher: string;
}
