import { DomainError } from './domain-error';

export class InvalidUuidError extends Error implements DomainError {
  constructor() {
    super('UUID inválido!');
    this.name = 'InvalidUuidError';
  }
}
