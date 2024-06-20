import { Type } from '@nestjs/common';

export const exceptionMessages = {
  notFoundValue: <T>(schema: Type<T>, identifier: string) =>
    `${schema.name} with passed ${identifier} is not found`,
};
