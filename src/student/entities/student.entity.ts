import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Prefix } from 'src/prefix/entities/prefix.entity';
import { Gender } from 'src/gender/entities/gender.entity';
import { Gradelevel } from 'src/gradelevel/entities/gradelevel.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  studentid: number;

  @Column()
  prefixid: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  genderid: number;

  @Column('date')
  birthdate: Date;

  @Column()
  gradelevelid: number;

  @ManyToOne(() => Prefix)
  @JoinColumn({ name: 'prefixid' })
  prefix: Prefix;

  @ManyToOne(() => Gender)
  @JoinColumn({ name: 'genderid' })
  gender: Gender;

  @ManyToOne(() => Gradelevel)
  @JoinColumn({ name: 'gradelevelid' })
  gradeLevel: Gradelevel;
}
