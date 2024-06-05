// src/student-classroom/student-classroom.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentClassroom } from './entities/student-classroom.entity';
import { Student } from 'src/student/entities/student.entity';
import { Classroom } from 'src/classroom/entities/classroom.entity';

@Injectable()
export class StudentClassroomService {
  constructor(
    @InjectRepository(StudentClassroom)
    private studentClassroomRepository: Repository<StudentClassroom>,
    // @InjectRepository(Student)
    // private studentRepository: Repository<Student>,
    // @InjectRepository(Classroom)
    // private classroomRepository: Repository<Classroom>,
  ) {}

  async findAll(): Promise<StudentClassroom[]> {
    return this.studentClassroomRepository.find();
  }

  async findStudentsInClassrooms(): Promise<any[]> {
    const query = `
      SELECT 
        s.firstname,
        s.lastname,
        FLOOR(DATEDIFF(CURDATE(), s.birthdate) / 365.25) AS age,
        s.genderid,
        c.classname as classroomname
      FROM 
        student_classroom sc
      JOIN 
        student s ON sc.studentid = s.studentid
      JOIN 
        classroom c ON sc.classroomid = c.classroomid
      ORDER BY 
        c.classname, s.firstname, s.lastname`;

    const results = await this.studentClassroomRepository.query(query);

    // Group students by classroomname
    const groupedResults = results.reduce((acc, student) => {
      if (!acc[student.classroomname]) {
        acc[student.classroomname] = [];
      }
      acc[student.classroomname].push(student);
      return acc;
    }, {});

    return groupedResults;
  }

  // async addStudentToClassroom(studentId: number, classroomId: number): Promise<StudentClassroom> {
  //   const student = await this.studentRepository.findOne(studentId);
  //   if (!student) {
  //     throw new NotFoundException(`Student with ID ${studentId} not found`);
  //   }

  //   const classroom = await this.classroomRepository.findOne(classroomId);
  //   if (!classroom) {
  //     throw new NotFoundException(`Classroom with ID ${classroomId} not found`);
  //   }

  //   const studentClassroom = this.studentClassroomRepository.create({ student, classroom });
  //   return this.studentClassroomRepository.save(studentClassroom);
  // }

  // async removeStudentFromClassroom(studentId: number, classroomId: number): Promise<void> {
  //   const result = await this.studentClassroomRepository.delete({ student: { studentid: studentId }, classroom: { classroomid: classroomId } });
  //   if (result.affected === 0) {
  //     throw new NotFoundException(`No entry found for student ID ${studentId} in classroom ID ${classroomId}`);
  //   }
  // }
}
