import { DomainError } from './domain-error';

export class InvalidCPF extends Error implements DomainError {
  constructor() {
    super('CPF inválido!');
    this.name = 'InvalidCPF';
  }
}
