import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

/**
 * Factory function for creating a BadRequestException based on class-validator errors.
 * @param errors - An array of class-validator ValidationError instances.
 * @returns BadRequestException - An exception with details of validation errors.
 */

export const validationPipeExceptionFactory = (errors: ValidationError[]) => {
  return new BadRequestException(
    errors.map((error) => ({
      property: error.property,
      message: error.constraints,
    })),
  );
};
