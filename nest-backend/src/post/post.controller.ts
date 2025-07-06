import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';

@Crud({
  model: {
    type: Post,
  },
})
@Controller('post')
export class PostController implements CrudController<Post> {
  constructor(public service: PostService) {}
}
