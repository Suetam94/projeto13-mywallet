import Joi from "joi";

interface IUserData {
  name: string;
  email: string;
  password: string;
}

export const validateUserData = (userData: IUserData) => {
  const validatorSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(8).required(),
  });

  return validatorSchema.validateAsync(userData);
};
