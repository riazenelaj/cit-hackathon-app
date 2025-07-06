import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostComment } from './entities/post-comment.entity';

@Injectable()
export class PostCommentService extends TypeOrmCrudService<PostComment> {
  constructor(@InjectRepository(PostComment) repo) {
    super(repo);
  }
}

