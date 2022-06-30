import Joi from "joi";

interface IUserData {
  name: string;
  email: string;
  password: string;
}

type UserLoginData = Omit<IUserData, "name">;

export const validateUserData = (userData: IUserData) => {
  const validatorSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(8).required(),
  });

  return validatorSchema.validateAsync(userData);
};

export const validateUserLoginData = (userLoginData: UserLoginData) => {
  const validatorSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(8).required(),
  });

  return validatorSchema.validateAsync(userLoginData);
};
