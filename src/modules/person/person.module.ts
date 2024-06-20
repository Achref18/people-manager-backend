import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from '@schemas/person.schema';
import { PersonController } from './controllers/person.controller';
import { PersonService } from './services/person.service';
import { personServiceProviders } from './person.providers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
  ],
  controllers: [PersonController],
  providers: [...personServiceProviders],
  exports: [...personServiceProviders],
})
export class PersonModule {}
