import Joi from "joi";

interface IFinanceValidator {
  entry: string;
  entryType: "inbound" | "outbound";
  description: string;
  userId: string;
}

class FinanceValidators {
  async verify(financeData: IFinanceValidator) {
    const financeVerifySchema = Joi.object({
      entry: Joi.number().integer().required(),
      description: Joi.string(),
      entryType: Joi.valid("inbound", "outbound").required(),
      userId: Joi.string().required(),
    });

    return financeVerifySchema.validateAsync(financeData);
  }
}

export { FinanceValidators };
