import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';

@Entity()
export class Prefix {
  @PrimaryGeneratedColumn()
  prefixid: number;

  @Column()
  prefixname: string;

  @OneToMany(() => Student, student => student.prefix)
  students: Student[];
}
