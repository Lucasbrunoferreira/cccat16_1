import { InvalidEmail } from "../errors/invalid-email";

export class Email {
  protected _value: string;

  constructor(value: string,){
    this._value = this.validate(value)
  }

  get value () {
    return this._value;
  }

  private validate(value: string) {
    if (value && value.match(/^(.+)@(.+)$/)) return value;
    throw new InvalidEmail()
  }
}
