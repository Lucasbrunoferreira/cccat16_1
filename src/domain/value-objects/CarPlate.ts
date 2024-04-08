import { InvalidCarPlate } from "../errors/invalid-car-plate";

export class CarPlate {
  protected _value: string;

  constructor(value: string,){
    this._value = this.validate(value)
  }

  get value () {
    return this._value;
  }

  private validate(value: string) {
    if (value && value.match(/[A-Z]{3}[0-9]{4}/)) return value;
    throw new InvalidCarPlate()
  }
}
