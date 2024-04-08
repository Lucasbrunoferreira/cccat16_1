import { InvalidAccountName } from "../errors/invalid-account-name";

export class Name {
  protected _value: string;

  constructor(value: string,){
    this._value = this.validate(value)
  }

  get value () {
    return this._value;
  }

  private validate(value: string) {
    if (value && value.match(/[a-zA-Z] [a-zA-Z]+/)) return value;
    throw new InvalidAccountName()
  }
}
