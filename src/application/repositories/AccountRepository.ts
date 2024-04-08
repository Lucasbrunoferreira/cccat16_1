import { Account } from "../../domain/entities/Account";

export abstract class AccountRepository {
  abstract findAccountByEmail(email: string): Promise<Account | undefined>;
}
