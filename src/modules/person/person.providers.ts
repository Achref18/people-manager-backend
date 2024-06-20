import { Provider } from '@nestjs/common';
import { PERSON_SERVICE } from './interfaces/IPersonService.interface';
import { PersonService } from './services/person.service';

export const personServiceProviders: Provider[] = [
  {
    provide: PERSON_SERVICE,
    useClass: PersonService,
  },
];
