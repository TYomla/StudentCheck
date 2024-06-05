import { Controller, Get, Param } from '@nestjs/common';
import { GenderService } from './gender.service';
import { Gender } from './entities/gender.entity';
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Get()
  async findAll(): Promise<Gender[]> {
    return this.genderService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<Gender> {
  //   return this.genderService.findOne(parseInt(id, 10));
  // }
}
