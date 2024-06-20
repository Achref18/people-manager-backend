import {
  Controller,
  Get,
  Post,
  Body,
  Inject,
  Delete,
  Param,
} from '@nestjs/common';
import { Person } from '@schemas/person.schema';
import { CreatePersonDto } from '../DTOs/create-person.dto';
import {
  IPersonService,
  PERSON_SERVICE,
} from '../interfaces/IPersonService.interface';

@Controller('person')
export class PersonController {
  constructor(
    @Inject(PERSON_SERVICE) protected personService: IPersonService,
  ) {}

  @Post()
  async createPerson(
    @Body() createPersonDto: CreatePersonDto,
  ): Promise<Person> {
    return this.personService.createPerson(createPersonDto);
  }

  @Delete(':id')
  async deletePerson(@Param('id') id: string): Promise<boolean> {
    return this.personService.deletePerson(id);
  }

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }
}
