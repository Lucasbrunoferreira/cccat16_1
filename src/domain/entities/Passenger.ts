import { Account, AccountProps } from "./Account";

export type PassengerProps = AccountProps;

export class Passenger extends Account {
  constructor(props: PassengerProps) {
    super(props)
  }
}
