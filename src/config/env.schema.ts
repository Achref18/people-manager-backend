import * as Joi from 'joi';
import { envConstants } from './env.constant';

export const environmentSchema = Joi.object({
  [envConstants.PORT]: Joi.number().required(),
  [envConstants.MONGODB_URL]: Joi.string().required(),
  [envConstants.ORIGIN]: Joi.string().required(),
});
