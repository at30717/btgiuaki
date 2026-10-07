import { Test, TestingModule } from '@nestjs/testing';
import { BorrowedRecordController } from './borrowed-record.controller.js';

describe('BorrowedRecordController', () => {
  let controller: BorrowedRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BorrowedRecordController],
    }).compile();

    controller = module.get<BorrowedRecordController>(BorrowedRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
