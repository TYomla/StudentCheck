import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gradelevel } from './entities/gradelevel.entity';
import { GradelevelController } from './gradelevel.controller';
import { GradelevelService } from './gradelevel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gradelevel])],
  controllers: [GradelevelController],
  providers: [GradelevelService],

})
export class GradelevelModule {}
