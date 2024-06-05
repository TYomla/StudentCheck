// src/student-classroom/student-classroom.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentClassroom } from './entities/student-classroom.entity';
import { StudentClassroomService } from './student-classroom.service';
import { StudentClassroomController } from './student-classroom.controller';
@Module({
  imports: [
    TypeOrmModule.forFeature([StudentClassroom]),
  ],
  controllers: [StudentClassroomController],
  providers: [StudentClassroomService],
})
export class StudentClassroomModule {}
