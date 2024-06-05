import { Controller, Get, Param } from '@nestjs/common';
import { GradelevelService } from './gradelevel.service';
import { Gradelevel } from './entities/gradelevel.entity';

@Controller('gradelevel')
export class GradelevelController {
  constructor(private readonly gradeLevelService: GradelevelService) {}

  @Get()
  async findAll(): Promise<Gradelevel[]> {
    return this.gradeLevelService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<GradeLevel> {
  //   return this.gradeLevelService.findOne(parseInt(id, 10));
  // }
}
