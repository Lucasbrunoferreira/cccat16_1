import { DomainError } from './domain-error';

export class InvalidEmail extends Error implements DomainError {
  constructor() {
    super('Email inválido!');
    this.name = 'InvalidEmail';
  }
}
