import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';
import { ClassroomModule } from './classroom/classroom.module';
import { Classroom } from './classroom/entities/classroom.entity';
import { StudentClassroomModule } from './student-classroom/student-classroom.module';
import { GradelevelModule } from './gradelevel/gradelevel.module';
import { GenderModule } from './gender/gender.module';
import { PrefixModule } from './prefix/prefix.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'node53939-belusysdb-1.th1.proen.cloud',
      port: 11320,
      username: 'quizdev_ac',
      password: 'XvDi8!c4',
      database: 'quizdev_ac',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    StudentModule,
    ClassroomModule,
    StudentClassroomModule,
    GradelevelModule,
    GenderModule,
    PrefixModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
