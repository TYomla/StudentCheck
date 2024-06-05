// import { IsString , IsNumber } from "class-validator";

// export class UpdateClassroomDto {
//     @IsString()
//     classname: string;

//     @IsNumber()
//     academic_year: number;

//     @IsString()
//     homeroom_teacher: string;
// }
import { PartialType } from '@nestjs/mapped-types';
import { CreateClassroomDto } from './create-classroom.dto';

export class UpdateClassroomDto extends PartialType(CreateClassroomDto) {}