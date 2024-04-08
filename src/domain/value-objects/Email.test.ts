import { InvalidEmail } from "../errors/invalid-email"
import { Email } from "./Email"

describe('Email', () => {
  test('should create a email with success', () => {
    const value = 'user@mail.com'
    const email = new Email(value)
    expect(email.value).toEqual(value)
  })

  test.each(['invalid.com', '1234', 'mail', 'ma', '', null, undefined])('should return a error for invalid email for: %s', (value: any) => {
    expect(() => new Email(value)).toThrow(InvalidEmail)
  })
})
