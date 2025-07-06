import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { PostComment } from './entities/post-comment.entity';
import { PostCommentService } from './post-comment.service';

@Crud({
  model: {
    type: PostComment,
  },
})
@Controller('post')
export class PostCommentController implements CrudController<PostComment> {
  constructor(public service: PostCommentService) {}
}

