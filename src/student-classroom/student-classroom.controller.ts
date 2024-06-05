// src/student-classroom/controllers/student-classroom.controller.ts

import { Controller, Get, Param  , Query} from '@nestjs/common';
import { StudentClassroom } from './entities/student-classroom.entity';
import { StudentClassroomService } from './student-classroom.service';

@Controller('student-classroom')
export class StudentClassroomController {
  constructor(private readonly studentClassroomService: StudentClassroomService) {}

  @Get()
  async findAll(): Promise<StudentClassroom[]> {
    return this.studentClassroomService.findAll();
  }

  @Get('male-students')
  async getMaleStudentsByAgeRange(): Promise<any[]> {
    return this.studentClassroomService.findStudentsInClassrooms();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<StudentClassroom> {
  //   return this.studentClassroomService.findOne(+id);
  // }
}
