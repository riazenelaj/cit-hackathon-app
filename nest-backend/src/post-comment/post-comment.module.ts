import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCommentController } from './post-comment.controller';
import { PostCommentService } from './post-comment.service';
import { PostComment } from './entities/post-comment.entity';

@Module({
  controllers: [PostCommentController],
  providers: [PostCommentService],
  imports: [TypeOrmModule.forFeature([PostComment])],
})
export class PostCommentModule {}
