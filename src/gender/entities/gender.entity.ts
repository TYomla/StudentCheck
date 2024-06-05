import { Entity, PrimaryGeneratedColumn, Column , OneToMany } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  genderid: number;

  @Column()
  gendername: string;

  // @OneToMany(() => Student, student => student.gender)
  // students: Student[];
}
