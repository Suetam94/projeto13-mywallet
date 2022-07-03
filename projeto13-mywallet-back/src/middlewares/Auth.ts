import { AuthUseCases } from "../useCases/AuthUseCases";

class Auth {
  private auth: AuthUseCases;

  constructor() {
    this.auth = new AuthUseCases();
  }

  async verifyToken(req, res, next) {
    const { authorization } = req.headers;

    try {
      req.user = await this.auth.verify({ token: authorization });

      return next();
    } catch (e) {
      return next(e);
    }
  }
}

export { Auth };
