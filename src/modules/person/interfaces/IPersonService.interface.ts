import { Person } from '@schemas/person.schema';
import { CreatePersonDto } from '../DTOs/create-person.dto';

export const PERSON_SERVICE = Symbol('PERSON_SERVICE');

export interface IPersonService {
  createPerson(createPersonDto: CreatePersonDto): Promise<Person>;
  deletePerson(personId: string): Promise<boolean>;
  findAll(): Promise<Person[]>;
}
