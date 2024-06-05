import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prefix } from './entities/prefix.entity';

@Injectable()
export class PrefixService {
  constructor(
    @InjectRepository(Prefix)
    private prefixRepository: Repository<Prefix>,
  ) {}

  async findAll(): Promise<Prefix[]> {
    return await this.prefixRepository.find();
  }

  // async findOne(id: number): Promise<Prefix> {
  //   return await this.prefixRepository.findOne(id);
  // }
}
