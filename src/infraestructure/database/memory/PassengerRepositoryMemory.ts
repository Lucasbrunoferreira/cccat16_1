import { PassengerRepository } from "../../../application/repositories/PassengerRepository"
import { Passenger } from "../../../domain/entities/Passenger"

export class PassengerRepositoryMemory extends PassengerRepository {
  public passengers: any[] = []

  async findById(id: string): Promise<Passenger> {
    const result = this.passengers.find(acc => acc.id === id)
    return new Passenger(result)
  }

  async save(driver: Passenger): Promise<void> {
    const { name, cpf, email, id } = driver;
    this.passengers.push({ name, cpf, email, id })
  }
}
