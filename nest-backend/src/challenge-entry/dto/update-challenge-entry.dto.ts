import { PartialType } from '@nestjs/mapped-types';
import { CreateChallengeEntryDto } from './create-challenge-entry.dto';

export class UpdateChallengeEntryDto extends PartialType(CreateChallengeEntryDto) {}
