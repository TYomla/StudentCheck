import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { Classroom } from './entities/classroom.entity';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Get()
  async findAll(): Promise<Classroom[]> {
    return this.classroomService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') classroomid: number): Promise<Classroom> {
    return this.classroomService.findOne(classroomid);
  }

  @Post()
  async create(@Body() createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    return this.classroomService.create(createClassroomDto);
  }

  @Put(':id')
  async update(@Param('id') classroomid: number, @Body() updateClassroomDto: UpdateClassroomDto): Promise<Classroom> {
    return this.classroomService.update(classroomid, updateClassroomDto);
  }

  @Delete(':id')
  async remove(@Param('id') classroomid: number): Promise<void> {
    return this.classroomService.remove(classroomid);
  }
}
