import { SignupUsecase } from "./SignupUsecase";
import app from './main';

app.post("/signup", async function (req, res) {
	const usecase = new SignupUsecase(req, res);
	const result = await usecase.execute()
	return result
});
