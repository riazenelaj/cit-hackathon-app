import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Challenge } from './entities/challenge.entity';

@Injectable()
export class ChallengeService extends TypeOrmCrudService<Challenge> {
  constructor(@InjectRepository(Challenge) repo) {
    super(repo);
  }
}
