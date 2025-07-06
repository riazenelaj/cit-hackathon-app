import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Post } from '../../post/entities/post.entity';
import { ApiProperty } from '@nestjsx/crud/lib/crud';

@Entity()
export class PostComment {
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

  @ApiProperty({type: () => Post})
  @ManyToOne(() => Post, post => post.comments) // Many comments can belong to one post
  post: Post;
}
