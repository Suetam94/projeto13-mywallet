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
  async getOneFinance(req, res) {
    const { id } = req.params;

    try {
      const finance = await this.financeUseCases.getOne(id, req.user.id);

      return res.status(200).json(finance).send();
    } catch (e) {
      return res.status(400).send({ message: e.message });
    }
  }
  async getAllFinances(req, res) {
    try {
      const finances = await this.financeUseCases.getAll(req.user.id);

      return res.status(200).json(finances).send();
    } catch (e) {
      return res.status(400).send({ message: e.message });
    }
  }
  async getFinancesTotal(req, res) {
    const { id } = req.user;

    try {
      const total = await this.financeUseCases.financeTotal(id);

      return res.status(200).json(total).send;
    } catch (e) {
      return res.status(400).send({ message: e.message });
    }
  }
}

export { FinanceController };
