import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { ChallengeEntry } from '../../challenge-entry/entities/challenge-entry.entity';
import { ApiProperty } from '@nestjsx/crud/lib/crud';

@Entity()
export class Challenge {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ type: 'longtext' })
  description: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn()
  deletedAt: Date;

  @ApiProperty({ type: () => ChallengeEntry })
  @OneToMany(() => ChallengeEntry, (entry) => entry.challenge) // One post can have many comments
  entries: ChallengeEntry[];
}
