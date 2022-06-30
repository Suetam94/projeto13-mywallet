import { validateUserData } from "../utils/validators/userValidator";

class UserController {
  async createUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const userDataValidate = await validateUserData({
        name,
        email,
        password,
      });

      return res.status(201).json(userDataValidate).send();
    } catch (e) {
      return res.status(400).json({ error: e }).send();
    }
  }
}

export { UserController };
