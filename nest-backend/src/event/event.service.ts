import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventService extends TypeOrmCrudService<Event> {
  constructor(@InjectRepository(Event) repo) {
    super(repo);
  }
}
