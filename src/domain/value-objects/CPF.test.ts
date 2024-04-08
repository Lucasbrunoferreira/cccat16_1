import { InvalidCPF } from "../errors/invalid-cpf"
import { CPF } from "./CPF"

describe('CPF', () => {
  test('should create a cpf with success', () => {
    const value = '87748248800'
    const cpf = new CPF(value)
    expect(cpf.value).toEqual(value)
  })

  test.each(['111111111', '81148248800', '1231213', '8774800000', '999999999', '', null, undefined])('should return a error for invalid cpf for: %s', (value: any) => {
    expect(() => new CPF(value)).toThrow(InvalidCPF)
  })
})
