import { Controller } from '@nestjs/common';
import { EventService } from './event.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Event } from './entities/event.entity';

@Crud({
  model: {
    type: Event,
  },
})
@Controller('event')
export class EventController implements CrudController<Event> {
  constructor(public service: EventService) {}
}
