import crypto from "crypto";
import { Account, AccountProps } from "./Account";

describe('Account', () => {
  test('should create a account with success', () => {
    const props: AccountProps = {
      cpf: '088.650.410-48',
      email: 'test@mail.com',
      name: 'Jonh Doe',
      id: crypto.randomUUID()
    }
    const account = new Account(props)
    expect(account.id).toEqual(props.id)
    expect(account.name).toEqual(props.name)
    expect(account.cpf).toEqual(props.cpf)
    expect(account.email).toEqual(props.email)
  })
})
