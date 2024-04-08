import { DomainError } from './domain-error';

export class InvalidAccountName extends Error implements DomainError {
  constructor() {
    super('-3');
    this.name = 'InvalidAccountName';
  }
}
