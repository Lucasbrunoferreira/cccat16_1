import { Entity } from "../shared/Entity";
import { CPF } from "../value-objects/CPF";
import { Email } from "../value-objects/Email";
import { Name } from "../value-objects/Name";

export type AccountProps = {
  id?: string;
  name: string;
  email: string,
  cpf: string,
}

export class Account extends Entity {
  public name: string;
  public email: string;
  public cpf: string;


  constructor(props: AccountProps){
    super(props.id);
    this.name = new Name(props.name).value;
    this.email = new Email(props.email).value;
    this.cpf = new CPF(props.cpf).value;
  }
}
