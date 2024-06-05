import { Controller, Get, Post, Body, Param, Put,NotFoundException ,Delete} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async findAllStudents(): Promise<Student[]> {
    return this.studentService.findAllStudents();
  }

  @Get(':id')
  async findOneStudent(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Post()
  async createStudent(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  @Put(':id')
  async updateStudent(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto): Promise<Student> {
    try {
      return await this.studentService.update(id, updateStudentDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string): Promise<void> {
    await this.studentService.remove(parseInt(id, 10));
  }
}
