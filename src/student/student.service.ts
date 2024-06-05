import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { Prefix } from 'src/prefix/entities/prefix.entity'; // Adjust the path as necessary
import { Gender } from 'src/gender/entities/gender.entity'; // Import Gender entity
import { Gradelevel } from 'src/gradelevel/entities/gradelevel.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(Prefix)
    private prefixRepository: Repository<Prefix>,
    @InjectRepository(Gender) // Ensure this is properly injected
    private genderRepository: Repository<Gender>,
    @InjectRepository(Gradelevel)
    private gradelevelRepository: Repository<Gradelevel>,
  ) {}

  findAllStudents(): Promise<Student[]> {
    return this.studentRepository.find({
      relations: ['prefix', 'gender', 'gradeLevel'],
    });
  }

  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({
      where: { studentid: id },
      relations: ['prefix', 'gender', 'gradeLevel'],
    });
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.findOne(id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }

    const { prefixid, genderid, gradelevelid, ...studentData } = updateStudentDto;

    if (prefixid) {
      const prefix = await this.prefixRepository.findOne({
        where: { prefixid: prefixid },
      });
      if (!prefix) {
        throw new NotFoundException(`Prefix with ID ${prefixid} not found.`);
      }
      student.prefix = prefix;
      student.prefixid = prefixid; // Update the foreign key field
    }

    if (genderid) {
      const gender = await this.genderRepository.findOne({
        where: { genderid: genderid },
      });
      if (!gender) {
        throw new NotFoundException(`Gender with ID ${genderid} not found.`);
      }
      student.gender = gender;
      student.genderid = genderid; // Update the foreign key field
    }

    if (gradelevelid) {
      const gradeLevel = await this.gradelevelRepository.findOne({
        where: { gradelevelid: gradelevelid },
      });
      if (!gradeLevel) {
        throw new NotFoundException(`Gradelevel with ID ${gradelevelid} not found.`);
      }
      student.gradeLevel = gradeLevel;
      student.gradelevelid = gradelevelid; // Update the foreign key field
    }

    // Merge any other fields
    Object.assign(student, studentData);

    return this.studentRepository.save(student);
  }

  async remove(id: number): Promise<void> {
    const result = await this.studentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
  }
}
