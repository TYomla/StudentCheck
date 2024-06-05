import { Controller, Get, Param } from '@nestjs/common';
import { PrefixService } from './prefix.service';
import { Prefix } from './entities/prefix.entity';

@Controller('prefix')
export class PrefixController {
  constructor(private readonly prefixService: PrefixService) {}

  @Get()
  async findAll(): Promise<Prefix[]> {
    return this.prefixService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<Prefix> {
  //   return this.prefixService.findOne(parseInt(id, 10));
  // }
}
