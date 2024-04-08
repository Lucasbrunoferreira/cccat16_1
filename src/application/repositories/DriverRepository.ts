import { Driver } from "../../domain/entities/Driver";

export abstract class DriverRepository {
  abstract save(driver: Driver): Promise<void>;
}
