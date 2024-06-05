import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prefix } from './entities/prefix.entity';
import { PrefixController } from './prefix.controller';
import { PrefixService } from './prefix.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prefix])],
  controllers: [PrefixController],
  providers: [PrefixService],
})
export class PrefixModule {}
