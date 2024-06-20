import { AbstractService } from '@common/abstract/abstract.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from '@schemas/person.schema';
import { Model } from 'mongoose';
import { CreatePersonDto } from '../DTOs/create-person.dto';
import { IPersonService } from '../interfaces/IPersonService.interface';
import { exceptionMessages } from '@common/messages/exception.messages';

@Injectable()
export class PersonService extends AbstractService implements IPersonService {
  constructor(
    @InjectModel(Person.name)
    private readonly personModel: Model<PersonDocument>,
  ) {
    super();
  }

  async createPerson(createPersonDto: CreatePersonDto): Promise<Person> {
    try {
      const createdPerson = new this.personModel(createPersonDto);
      return createdPerson.save();
    } catch (error) {
      this.logger.error(error);
    }
  }

  async deletePerson(personId: string): Promise<boolean> {
    try {
      const toDeletePerson = await this.personModel.findByIdAndDelete(personId);

      if (!toDeletePerson) {
        throw new Error(exceptionMessages.notFoundValue(Person, personId));
      }

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new NotFoundException(error.message);
    }
  }
  async findAll(): Promise<Person[]> {
    try {
      return this.personModel.find().exec();
    } catch (error) {
      this.logger.error(error);
    }
  }
}
