import { Logger } from '@nestjs/common';

export abstract class AbstractService {
  protected logger: Logger;
  constructor() {
    this.logger = new Logger(this.constructor.name);
  }
}
