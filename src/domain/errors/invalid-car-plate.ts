import { DomainError } from './domain-error';

export class InvalidCarPlate extends Error implements DomainError {
  constructor() {
    super('-5');
    this.name = 'InvalidCarPlate';
  }
}
