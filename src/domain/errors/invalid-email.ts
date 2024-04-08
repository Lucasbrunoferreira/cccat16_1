import { DomainError } from './domain-error';

export class InvalidEmail extends Error implements DomainError {
  constructor() {
    super('-2');
    this.name = 'InvalidEmail';
  }
}
