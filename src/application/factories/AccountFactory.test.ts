import crypto from "crypto"
import { Driver } from "../../domain/entities/Driver"
import { Passenger } from "../../domain/entities/Passenger"
import { AccountFactory } from "./AccountFactory"

describe('Account Factory', () => {
  test('should create a driver account', () => {
    const props = {
      cpf: '088.650.410-48',
      email: 'test@mail.com',
      name: 'Jonh Doe',
      id: crypto.randomUUID(),
      carPlate: 'LUC1420'
    }
    const account = AccountFactory.make(props)
    expect(account).toBeInstanceOf(Driver)
  })

  test('should create a passenger account', () => {
    const props = {
      cpf: '088.650.410-48',
      email: 'test@mail.com',
      name: 'Jonh Doe',
      id: crypto.randomUUID(),
    }
    const account = AccountFactory.make(props)
    expect(account).toBeInstanceOf(Passenger)
  })
})
