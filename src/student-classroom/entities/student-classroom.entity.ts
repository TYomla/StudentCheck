// src/student-classroom/entities/student-classroom.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Classroom } from 'src/classroom/entities/classroom.entity';

@Entity()
export class StudentClassroom {
  @PrimaryGeneratedColumn()
  student_classroom_id: number;

  @Column()
  studentid: number;

  @Column()
  classroomid: number;

//   @ManyToOne(() => Student, student => student.classroom)
//   @JoinColumn({ name: 'studentid' })
//   student: Student;

//   @ManyToOne(() => Classroom, classroom => classroom.students)
//   @JoinColumn({ name: 'classroomid' })
//   classroom: Classroom;
}
