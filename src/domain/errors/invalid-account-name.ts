import { DomainError } from './domain-error';

export class InvalidAccountName extends Error implements DomainError {
  constructor() {
    super('Nome de conta inválido!');
    this.name = 'InvalidAccountName';
  }
}
