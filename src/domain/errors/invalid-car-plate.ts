import { DomainError } from './domain-error';

export class InvalidCarPlate extends Error implements DomainError {
  constructor() {
    super('Placa de carro inválida!');
    this.name = 'InvalidCarPlate';
  }
}
