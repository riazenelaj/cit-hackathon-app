import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengeEntry } from './entities/challenge-entry.entity';

@Injectable()
export class ChallengeEntryService extends TypeOrmCrudService<ChallengeEntry> {
  constructor(@InjectRepository(ChallengeEntry) repo) {
    super(repo);
  }
}
