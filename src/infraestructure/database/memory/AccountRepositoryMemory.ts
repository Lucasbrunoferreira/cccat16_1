import { AccountFactory } from "../../../application/factories/AccountFactory"
import { AccountRepository } from "../../../application/repositories/AccountRepository"
import { Account } from "../../../domain/entities/Account"

export class AccountRepositoryMemory extends AccountRepository {
  private _accounts: any[] = []

  async findAccountByEmail(email: string): Promise<Account> {
    const result = this._accounts.find(acc => acc.email === email)
    return AccountFactory.make(result)
  }
}
