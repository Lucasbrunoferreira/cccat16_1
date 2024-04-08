import crypto from "crypto";
import { Driver, DriverProps } from "./Driver";

describe('Driver', () => {
  test('should create a account with success', () => {
    const props: DriverProps = {
      cpf: '088.650.410-48',
      email: 'test@mail.com',
      name: 'Jonh Doe',
      id: crypto.randomUUID(),
      carPlate: 'LUC1420'
    }
    const account = new Driver(props)
    expect(account.id).toEqual(props.id)
    expect(account.name).toEqual(props.name)
    expect(account.cpf).toEqual(props.cpf)
    expect(account.email).toEqual(props.email)
    expect(account.carPlate).toEqual(props.carPlate)
  });
})
