import { SignupUsecase } from "./application/usecases/SignupUsecase";
import { AccountRepositoryPSQL } from "./infraestructure/database/psql/repositories/AccountRepositoryPSQL";
import { DriverRepositoryPSQL } from "./infraestructure/database/psql/repositories/DriverRepositoryPSQL";
import { PassengerRepositoryPSQL } from "./infraestructure/database/psql/repositories/PassengerRepositoryPSQL";
import app from './main';

app.post("/signup", async function (req, res) {
	try {
		const accountRepository = new AccountRepositoryPSQL()
		const driverRepository = new DriverRepositoryPSQL()
		const passengerRepository = new PassengerRepositoryPSQL()
		const usecase = new SignupUsecase(accountRepository, driverRepository, passengerRepository);
		const result = await usecase.execute(req.body)
		res.json(result);
	} catch (e: any) {
		res.status(422).send(e.message + "");
	}
});
