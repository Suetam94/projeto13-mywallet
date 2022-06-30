import { UserUseCases } from "../useCases/UserUseCases";
import { validateUserData } from "../utils/validators/userValidator";

class UserController {
  private userUseCases: UserUseCases;

  constructor() {
    this.userUseCases = new UserUseCases();
  }

  async createUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const userDataValidate = await validateUserData({
        name,
        email,
        password,
      });

      const user = await this.userUseCases.create(userDataValidate);

      return res.status(201).json(user).send();
    } catch (e) {
      console.log(e);
      return res.status(400).send({ message: e.message });
    }
  }

  async getUser(req, res) {
    const { id } = req.params;

    try {
      const user = await this.userUseCases.getOne(id);

      return res.status(200).json(user).send();
    } catch (e) {
      return res.status(400).send({ message: e.message });
    }
  }
}

export { UserController };
