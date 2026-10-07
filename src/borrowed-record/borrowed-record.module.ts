import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BorrowedRecordController } from './borrowed-record.controller';
import { BorrowedRecordService } from './borrowed-record.service';
import { BorrowedRecord } from './entities/borrowed-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BorrowedRecord])],
  controllers: [BorrowedRecordController],
  providers: [BorrowedRecordService],
})
export class BorrowedRecordModule {}
