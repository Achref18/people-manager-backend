import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonModule } from '@modules/person/person.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { environmentSchema } from 'config/env.schema';
import { MongodbConfigService } from '@config/mongodb.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: environmentSchema,
    }),
    MongooseModule.forRootAsync({
      useClass: MongodbConfigService,
    }),
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
