import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ChallengeEntry } from './entities/challenge-entry.entity';
import { ChallengeEntryService } from './challenge-entry.service';

@Crud({
  model: {
    type: ChallengeEntry,
  },
})
@Controller('challenge-entry')
export class ChallengeEntryController
  implements CrudController<ChallengeEntry>
{
  constructor(public service: ChallengeEntryService) {}
}
