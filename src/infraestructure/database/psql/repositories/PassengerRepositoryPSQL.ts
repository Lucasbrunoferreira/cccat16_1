import { PassengerRepository } from "../../../../application/repositories/PassengerRepository";
import { Passenger } from "../../../../domain/entities/Passenger";
import { PostgresConnection } from "../connection";

export class PassengerRepositoryPSQL implements PassengerRepository {
  async save(passenger: Passenger): Promise<void> {
    const { name, cpf, email, id } = passenger;
    await PostgresConnection.connection().query("insert into cccat16.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver) values ($1, $2, $3, $4, $5, $6, $7)", [id, name, email, cpf, null, false, true]);
  }
}
