// src/student/student.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Prefix } from 'src/prefix/entities/prefix.entity';
import { Gender } from 'src/gender/entities/gender.entity';
import { Gradelevel } from 'src/gradelevel/entities/gradelevel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student,Prefix,Gender,Gradelevel]), // Include Gender entity
  ],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
