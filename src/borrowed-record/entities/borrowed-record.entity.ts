import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Book } from '../../book/entities/book.entity';
import { Reader } from '../../reader/entities/reader.entity';

@Entity('borrowed_records')
export class BorrowedRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  borrowDate: string;

  @Column({ type: 'date' })
  dueDate: string;

  @Column()
  bookId: number;

  @Column()
  readerId: number;

  @ManyToOne(() => Book, (book) => book.borrowedRecords)
  @JoinColumn({ name: 'bookId' })
  book: Book;

  @ManyToOne(() => Reader, (reader) => reader.borrowedRecords)
  @JoinColumn({ name: 'readerId' })
  reader: Reader;
}
