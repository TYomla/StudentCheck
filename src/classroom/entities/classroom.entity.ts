// classroom/entities/classroom.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn()
  classroomid: number;

  @Column()
  classname: string;

  @Column()
  academic_year: number;

  @Column()
  homeroom_teacher: string;

//   @OneToMany(() => Student, student => student.classroom)
//   students: Student[];
}
