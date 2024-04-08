import { DomainError } from './domain-error';

export class InvalidCPF extends Error implements DomainError {
  constructor() {
    super('-1');
    this.name = 'InvalidCPF';
  }
}
