import { Passenger } from "../../domain/entities/Passenger";

export abstract class PassengerRepository {
  abstract save(passenger: Passenger): Promise<void>;
}
