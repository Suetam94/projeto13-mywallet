import Finance from "../database/models/Finance";

interface IFinanceCreateData {
  entry: string;
  entryType: "inbound" | "outbound";
  description: string;
  userId: string;
}

class FinanceUseCases {
  async create({ description, entry, entryType, userId }: IFinanceCreateData) {
    const finance = new Finance({
      entry,
      entryType,
      description,
      userId,
    });

    await finance.save();

    return finance;
  }
  async getOne(financeId: string, userId: string) {
    const finance = await Finance.findById(financeId).find({ userId });

    if (!finance || finance.length === 0) {
      throw new Error(
        "This data do not exists or you are not allowed to access it."
      );
    }

    return Finance.findByIdAndDelete(financeId);
  }
  async getAll(userId: string) {
    return Finance.find({ userId });
  }
  async financeTotal(userId: string) {
    const inbounds = await Finance.find({ userId }).find({
      entryType: "inbound",
    });

    const outbounds = await Finance.find({ userId }).find({
      entryType: "outbounds",
    });

    let inboundSum = 0;
    let outboundSum = 0;

    inbounds.forEach((inbound) => {
      inboundSum += inbound.entry;
    });

    outbounds.forEach((outbound) => {
      outboundSum += outbound.entry;
    });

    return { total: inboundSum - outboundSum };
  }
}

export { FinanceUseCases };
