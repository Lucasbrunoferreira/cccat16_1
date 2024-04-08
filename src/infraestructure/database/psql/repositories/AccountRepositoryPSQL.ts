import { AccountFactory } from "../../../../application/factories/AccountFactory";
import { AccountRepository } from "../../../../application/repositories/AccountRepository";
import { Account } from "../../../../domain/entities/Account";
import { PostgresConnection } from "../connection";

export class AccountRepositoryPSQL extends AccountRepository {
  async findAccountByEmail(email: string): Promise<Account | undefined> {
    const [acc] = await PostgresConnection.connection().query("select * from cccat16.account where email = $1", [email])
    if (!acc) return undefined
    return AccountFactory.make(acc)
  }
}
