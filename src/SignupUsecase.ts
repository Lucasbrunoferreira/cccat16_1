import crypto from "crypto";
import pgp from "pg-promise";
import { validate } from "./validateCpf";

type SignupUsecaseInput = {
	name: string
	email: string
	cpf: string
	car_plate: string
  isDriver: boolean
  isPassenger: boolean
}

export class SignupUsecase {
  constructor(
    public req: any,
    public res: any
  ) {}

  async execute() {
    let result;
    const connection = pgp()("postgres://lucas:lucas@localhost:5432/cccat16");
    try {
      const id = crypto.randomUUID();
      const [acc] = await connection.query("select * from cccat16.account where email = $1", [this.req.body.email]);
      if (!acc) {
        if (this.req.body.name.match(/[a-zA-Z] [a-zA-Z]+/)) {
          if (this.req.body.email.match(/^(.+)@(.+)$/)) {
            if (validate(this.req.body.cpf)) {
              if (this.req.body.isDriver) {
                if (this.req.body.carPlate.match(/[A-Z]{3}[0-9]{4}/)) {
                  await connection.query("insert into cccat16.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver) values ($1, $2, $3, $4, $5, $6, $7)", [id, this.req.body.name, this.req.body.email, this.req.body.cpf, this.req.body.carPlate, !!this.req.body.isPassenger, !!this.req.body.isDriver]);
                  const obj = {
                    accountId: id
                  };
                  result = obj;
                } else {
                  // invalid car plate
                  result = -5;
                }
              } else {
                await connection.query("insert into cccat16.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver) values ($1, $2, $3, $4, $5, $6, $7)", [id, this.req.body.name, this.req.body.email, this.req.body.cpf, this.req.body.carPlate, !!this.req.body.isPassenger, !!this.req.body.isDriver]);
                const obj = {
                  accountId: id
                };
                result = obj;
              }
            } else {
              // invalid cpf
              result = -1;
            }
          } else {
            // invalid email
            result = -2;
          }
        } else {
          // invalid name
          result = -3;
        }
      } else {
        // already exists
        result = -4;
      }
      if (typeof result === "number") {
        this.res.status(422).send(result + "");
      } else {
        this.res.json(result);
      }
    } finally {
      await connection.$pool.end();
    }
  }
}
