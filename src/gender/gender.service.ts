import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
  constructor(
    @InjectRepository(Gender)
    private genderRepository: Repository<Gender>,
  ) {}

  findAll(): Promise<Gender[]> {
    return this.genderRepository.find();
  }

  // async findOne(id: number): Promise<Gender> {
  //   return await this.genderRepository.findOne(id);
  // }
}
