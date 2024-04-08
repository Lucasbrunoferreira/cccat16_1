import { InvalidAccountName } from "../errors/invalid-account-name"
import { Name } from "./Name"

describe('Name', () => {
  test('should create a name with success', () => {
    const value = 'John Doe'
    const name = new Name(value)
    expect(name.value).toEqual(value)
  })

  test.each(['123', 'Abcsaas', 'asdas12', '@@a', null, undefined])('should return a error for invalid name for: %s', (value: any) => {
    expect(() => new Name(value)).toThrow(InvalidAccountName)
  })
})
