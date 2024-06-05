import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classroom } from './entities/classroom.entity';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom)
    private classroomRepository: Repository<Classroom>,
  ) {}

  findAll(): Promise<Classroom[]> {
    return this.classroomRepository.find();
  }

  async findOne(classroomid: number): Promise<Classroom> {
    return this.classroomRepository.findOneBy({ classroomid });
  }

  async create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    const classroom = this.classroomRepository.create(createClassroomDto);
    return this.classroomRepository.save(classroom);
  }

  async update(classroomid: number, updateClassroomDto: UpdateClassroomDto): Promise<Classroom> {
    const classroom = await this.classroomRepository.findOneBy({ classroomid });
    if (!classroom) {
      throw new NotFoundException(`Classroom with ID ${classroomid} not found`);
    }
    this.classroomRepository.merge(classroom, updateClassroomDto);
    return this.classroomRepository.save(classroom);
  }

  async remove(classroomid: number): Promise<void> {
    const result = await this.classroomRepository.delete(classroomid);
    if (result.affected === 0) {
      throw new NotFoundException(`Classroom with ID ${classroomid} not found`);
    }
  }
}
