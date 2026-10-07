import { Test, TestingModule } from '@nestjs/testing';
import { BorrowedRecordService } from './borrowed-record.service.js';

describe('BorrowedRecordService', () => {
  let service: BorrowedRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorrowedRecordService],
    }).compile();

    service = module.get<BorrowedRecordService>(BorrowedRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
