import { InvalidCarPlate } from "../errors/invalid-car-plate"
import { CarPlate } from "./CarPlate"

describe('CarPlate', () => {
  test('should create a car plate with success', () => {
    const value = 'LUC1234'
    const carPlate = new CarPlate(value)
    expect(carPlate.value).toEqual(value)
  })

  test.each(['1MA123', '@aa233', 'AAA222', '3333A', 'AAAA222', '', null, undefined])('should return a error for invalid car plate for: %s', (value: any) => {
    expect(() => new CarPlate(value)).toThrow(InvalidCarPlate)
  })
})
