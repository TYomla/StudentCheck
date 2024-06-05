import { Test, TestingModule } from '@nestjs/testing';
import { GradelevelController } from './gradelevel.controller';
import { GradelevelService } from './gradelevel.service';

describe('GradelevelController', () => {
  let controller: GradelevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradelevelController],
      providers: [GradelevelService],
    }).compile();

    controller = module.get<GradelevelController>(GradelevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
