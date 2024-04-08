import axios from "axios";

axios.defaults.validateStatus = function () {
	return true;
}

const URL = "http://localhost:3000/signup"

describe('Signup', () => {
  describe('Validações de conta', () => {
    test("Deve retornar o erro -1 caso seja um CPF inválido", async function () {
      const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "INVALID",
        isPassenger: true
      };
      await axios.post(URL, input);
      const output = await axios.post(URL, input);
      expect(output.status).toEqual(422)
      expect(output.data).toEqual(-1)
    });

    test("Deve o erro -2 caso seja um email inválido", async function () {
      const input = {
        name: "John Doe",
        email: `invalid_email`,
        cpf: "87748248800",
        isPassenger: true
      };
      await axios.post(URL, input);
      const output = await axios.post(URL, input);
      expect(output.status).toEqual(422)
      expect(output.data).toEqual(-2)
    });

    test("Deve retornar o erro -3 caso seja um nome de usuário inválido ", async function () {
      const input = {
        name: "1231231",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "87748248800",
        isPassenger: true
      };
      await axios.post(URL, input);
      const output = await axios.post(URL, input);
      expect(output.status).toEqual(422)
      expect(output.data).toEqual(-3)
    });

    test("Deve retornar o erro -4 caso já exista um usuário", async function () {
      const email = `john.doe${Math.random()}@gmail.com`
      const input = {
        name: "John Doe",
        email,
        cpf: "87748248800",
        isPassenger: true
      };
      await axios.post(URL, input);
      const output = await axios.post(URL, input);
      expect(output.status).toEqual(422)
      expect(output.data).toEqual(-4)
    });
  })

  describe('Validações para criação de passageiro', () => {
    test("Deve criar uma conta para o passageiro", async function () {
      const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "87748248800",
        isPassenger: true
      };
      const output = await axios.post(URL, input);
      expect(output.status).toEqual(200)
      expect(output.data.accountId).toBeTruthy()
    });
  })

  describe('Validações para criação de motorista', () => {
    test("Deve criar uma conta para o motorista", async function () {
      const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "87748248800",
        isDriver: true,
        carPlate: 'LUC1420'
      };
      const output = await axios.post(URL, input);
      expect(output.data.accountId).toBeTruthy()
      expect(output.status).toEqual(200)
    });

    test("Deve retornar o erro -5 para placa inválida", async function () {
      const input = {
        name: "John Doe",
        email: `john.doe${Math.random()}@gmail.com`,
        cpf: "87748248800",
        isDriver: true,
        carPlate: '@@12'
      };
      const output = await axios.post(URL, input);
      expect(output.status).toEqual(422)
      expect(output.data).toEqual(-5)
    });
  })
})
