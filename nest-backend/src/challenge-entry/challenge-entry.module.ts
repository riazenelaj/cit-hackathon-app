import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeEntry } from './entities/challenge-entry.entity';
import { ChallengeEntryController } from './challenge-entry.controller';
import { ChallengeEntryService } from './challenge-entry.service';

@Module({
  controllers: [ChallengeEntryController],
  providers: [ChallengeEntryService],
  imports: [TypeOrmModule.forFeature([ChallengeEntry])],
})
export class ChallengeEntryModule {}
