import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReaderController } from './reader.controller';
import { ReaderService } from './reader.service';
import { Reader } from './entities/reader.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reader])],
  controllers: [ReaderController],
  providers: [ReaderService],
  exports: [TypeOrmModule],
})
export class ReaderModule {}
