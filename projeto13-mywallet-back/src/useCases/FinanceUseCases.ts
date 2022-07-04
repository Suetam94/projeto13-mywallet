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
}

export { FinanceUseCases };
