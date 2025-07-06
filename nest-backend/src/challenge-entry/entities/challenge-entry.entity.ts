import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Challenge } from '../../challenge/entities/challenge.entity';
import { ApiProperty } from '@nestjsx/crud/lib/crud';

@Entity()
export class ChallengeEntry {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
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

  @ApiProperty({ type: () => Challenge })
  @ManyToOne(() => Challenge, (challenge) => challenge.entries) // Many comments can belong to one post
  challenge: Challenge;
}
