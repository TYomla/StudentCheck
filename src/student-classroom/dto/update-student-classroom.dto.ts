import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentClassroomDto } from './create-student-classroom.dto';

export class UpdateStudentClassroomDto extends PartialType(CreateStudentClassroomDto) {}
