import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gradelevel } from './entities/gradelevel.entity';

@Injectable()
export class GradelevelService {
  constructor(
    @InjectRepository(Gradelevel)
    private gradeLevelRepository: Repository<Gradelevel>,
  ) {}

  async findAll(): Promise<Gradelevel[]> {
    return await this.gradeLevelRepository.find();
  }

  // async findOne(id: number): Promise<GradeLevel> {
  //   return await this.gradeLevelRepository.findOne(id);
  // }
}
