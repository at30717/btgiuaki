import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BorrowedRecord } from '../../borrowed-record/entities/borrowed-record.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  quantity: number;

  @OneToMany(() => BorrowedRecord, (record) => record.book)
  borrowedRecords: BorrowedRecord[];
}
