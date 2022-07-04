import { FinanceUseCases } from "../useCases/FinanceUseCases";
import { FinanceValidators } from "../utils/validators/FinanceValidators";

class FinanceController {
  private financeUseCases: FinanceUseCases;
  private financeValidators: FinanceValidators;

  constructor() {
    this.financeUseCases = new FinanceUseCases();
    this.financeValidators = new FinanceValidators();
  }

  async createFinance(req, res) {
    const { entry, entryType, description } = req.body;
    const { user } = req;

    const originalFinanceData = {
      entry,
      entryType,
      description,
      userId: user.id,
    };

    try {
      const verifiedFinanceData = await this.financeValidators.verify(
        originalFinanceData
      );

      const finance = await this.financeUseCases.create(verifiedFinanceData);

      return res.status(201).json(finance).send();
    } catch (e) {
      return res.status(400).send({ message: e.message });
    }
  }
}

export { FinanceController };
