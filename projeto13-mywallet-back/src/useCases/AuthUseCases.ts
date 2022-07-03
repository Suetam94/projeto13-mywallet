import Jwt from "jsonwebtoken";

import User from "../database/models/User";

interface IAuth {
  token: string;
}

interface IToken {
  id: string;
  iat: number;
}

class AuthUseCases {
  async verify({ token }: IAuth) {
    const tokenFiltered = token.split("Bearer ");

    const tokenPayload = Jwt.verify(
      tokenFiltered[1],
      process.env.PRIVATE_KEY
    ) as IToken;

    const user = await User.findById(tokenPayload.id);

    if (user) {
      return {
        id: tokenPayload.id,
        name: user.name,
      };
    }

    return false;
  }
}

export { AuthUseCases };
