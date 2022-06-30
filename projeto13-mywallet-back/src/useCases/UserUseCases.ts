import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../database/models/User";

interface ICreateUserData {
  name: string;
  password: string;
  email: string;
}

type LoginUserData = Omit<ICreateUserData, "name">;

class UserUseCases {
  async create({ name, password, email }: ICreateUserData) {
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("E-mail is already in use.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    return user.save();
  }

  async login({ email, password }: LoginUserData) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("This e-mail does not exists.");
    }

    const isLoginValid = await bcrypt.compare(password, user.password);

    if (!isLoginValid) {
      throw new Error("Password is not valid.");
    }

    return jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, {
      algorithm: "HS256",
    });
  }

  async getOne(id) {
    return User.findById(id);
  }
}

export { UserUseCases };
