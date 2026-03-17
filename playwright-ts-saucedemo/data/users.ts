import { env } from '../utils/env';

export const users = {
  standard: {
    username: env.standardUser,
    password: env.password
  },
  locked: {
    username: env.lockedOutUser,
    password: env.password
  }
};
