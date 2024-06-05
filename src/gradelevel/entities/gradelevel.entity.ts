import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';

@Entity()
export class Gradelevel {
  @PrimaryGeneratedColumn()
  gradelevelid: number;

  @Column()
  levelname: string;

  @OneToMany(() => Student, student => student.gradeLevel)
  students: Student[];
}
