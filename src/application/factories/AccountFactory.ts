import { Driver } from "../../domain/entities/Driver";
import { Passenger } from "../../domain/entities/Passenger";

export class AccountFactory {
  static make(props: any) {
    if (!!props?.carPlate) return new Driver(props)
    return new Passenger(props)
  }
}
