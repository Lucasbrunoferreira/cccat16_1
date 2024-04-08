import { CarPlate } from "../value-objects/CarPlate";
import { Account, AccountProps } from "./Account";

export type DriverProps = AccountProps & {
  carPlate: string;
}

export class Driver extends Account {
  private _carPlate: string;

  constructor({ carPlate, ...props}: DriverProps) {
    super(props)
    this._carPlate = new CarPlate(carPlate).value
  }

  get carPlate() {
    return this._carPlate
  }
}
