import { IsNotEmpty ,IsString, IsNumber } from "class-validator";
export class CreateStudentClassroomDto {
    @IsNumber()
    @IsNotEmpty()
    student_classroom_id: number;

    @IsNumber()
    @IsNotEmpty()
    studentid: number;

    @IsNumber()
    @IsNotEmpty()
    classroomid: number;
}
