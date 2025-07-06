import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { PostComment } from '../../post-comment/entities/post-comment.entity';
import { ApiProperty } from '@nestjsx/crud/lib/crud';


@Entity()
export class Post {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ type: 'longtext'})
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

  @ApiProperty({type: () => PostComment})
  @OneToMany(() => PostComment, comment => comment.post) // One post can have many comments
  comments: PostComment[];
}
