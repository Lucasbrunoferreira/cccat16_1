import { Driver } from "../../domain/entities/Driver";
import { AccountExistsError } from "../errors/account-exists";
import { AccountFactory } from "../factories/AccountFactory";
import { AccountRepository } from "../repositories/AccountRepository";
import { DriverRepository } from "../repositories/DriverRepository";
import { PassengerRepository } from "../repositories/PassengerRepository";

type SignupUsecaseInput = {
	name: string
	email: string
	cpf: string
	carPlate: string
}

type SignupUsecaseOutput = { accountId: string }

export class SignupUsecase {
  constructor(
    public accountRepository: AccountRepository,
    public driverRepository: DriverRepository,
    public passengerRepository: PassengerRepository
  ) {}

  async execute(input: SignupUsecaseInput): Promise<SignupUsecaseOutput> {
    const { carPlate, cpf, email, name } = input;
    const accountExists = await this.accountRepository.findAccountByEmail(email);
    if (accountExists) throw new AccountExistsError()
    const account = AccountFactory.make({ carPlate, cpf, email, name })
    if ((account as Driver)?.carPlate) {
      this.driverRepository.save(account as Driver)
    } else {
      this.passengerRepository.save(account)
    }
    return { accountId: account.id }
  }
}
