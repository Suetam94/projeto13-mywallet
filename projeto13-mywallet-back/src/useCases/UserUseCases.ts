import bcrypt from "bcrypt";

import User from "../database/models/User";

interface ICreateUserData {
  name: string;
  password: string;
  email: string;
}

class UserUseCases {
  async create({ name, password, email }: ICreateUserData) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    return user.save();
  }
}

export { UserUseCases };
