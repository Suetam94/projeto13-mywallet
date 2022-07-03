class FinanceController {
  async createFinance(req, res) {
    const { entry, entryType, description } = req.body;

    console.log(req.user);

    return res.status(201).send();
  }
}

export { FinanceController };
