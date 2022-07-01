import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { app } from "../utils/axios";

interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
}

type UserInput = Omit<IUser, "_id">;
type UserLoginInput = Omit<IUser, "name" | "_id">;

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  user: IUser;
  userSignUp: (user: UserInput) => Promise<IUser>;
  token: string;
  userLogin: (userLoginData: UserLoginInput) => Promise<string>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [token, setToken] = useState<string>("");

  async function userSignUp(userInput: UserInput): Promise<IUser> {
    const response = await app.post("/user/create", userInput);

    const { user } = response.data;

    setUser(user);

    return user;
  }

  async function userLogin(userLoginInput: UserLoginInput): Promise<string> {
    const response = await app.post("/user/login", userLoginInput);

    const { token } = response.data;

    setToken(token);

    return token;
  }

  return (
    <UserContext.Provider value={{ user, userSignUp, token, userLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
