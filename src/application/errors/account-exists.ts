import { ApplicationError } from './application-error';

export class AccountExistsError extends Error implements ApplicationError {
  constructor() {
    super('-4');
    this.name = 'AccountExistsError';
  }
}
