import { DriverRepository } from "../../../application/repositories/DriverRepository"
import { Driver } from "../../../domain/entities/Driver"

export class DriverRepositoryMemory extends DriverRepository {
  public drivers: any[] = []

  async findById(id: string): Promise<Driver> {
    const result = this.drivers.find(acc => acc.id === id)
    return new Driver(result)
  }

  async save(driver: Driver): Promise<void> {
    const { name, carPlate, cpf, email, id } = driver;
    this.drivers.push({ name, carPlate, cpf, email, id })
  }
}
