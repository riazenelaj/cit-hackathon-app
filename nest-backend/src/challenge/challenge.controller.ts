import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Challenge } from './entities/challenge.entity';
import { ChallengeService } from './challenge.service';

@Crud({
  model: {
    type: Challenge,
  },
})
@Controller('challenge')
export class ChallengeController implements CrudController<Challenge> {
  constructor(public service: ChallengeService) {}
}

