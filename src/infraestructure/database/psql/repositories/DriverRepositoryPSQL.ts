import { DriverRepository } from "../../../../application/repositories/DriverRepository";
import { Driver } from "../../../../domain/entities/Driver";
import { PostgresConnection } from "../connection";

export class DriverRepositoryPSQL implements DriverRepository {
  async save(driver: Driver): Promise<void> {
    const { name, carPlate, cpf, email, id } = driver;
    await PostgresConnection.connection().query("insert into cccat16.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver) values ($1, $2, $3, $4, $5, $6, $7)", [id, name, email, cpf, carPlate, false, true]);
  }
}
