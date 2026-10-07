import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BorrowedRecord } from '../../borrowed-record/entities/borrowed-record.entity';

@Entity('readers')
export class Reader {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => BorrowedRecord, (record) => record.reader)
  borrowedRecords: BorrowedRecord[];
}
