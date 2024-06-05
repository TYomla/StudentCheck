import { Test, TestingModule } from '@nestjs/testing';
import { StudentClassroomController } from './student-classroom.controller';
import { StudentClassroomService } from './student-classroom.service';

describe('StudentClassroomController', () => {
  let controller: StudentClassroomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentClassroomController],
      providers: [StudentClassroomService],
    }).compile();

    controller = module.get<StudentClassroomController>(StudentClassroomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
