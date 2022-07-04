import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { app } from "../utils/axios";

interface IFinance {
  _id: string;
  entry: number;
  entryType: "inbound" | "outbound";
  description: string;
  createdAt: Date;
}

export type FinanceInput = Omit<IFinance, "_id">;

interface FinanceProviderProps {
  children: ReactNode;
}

interface FinanceContextData {
  financeInput: (finance: FinanceInput) => Promise<IFinance>;
  financeData: IFinance[];
}

const FinanceContext = createContext<FinanceContextData>(
  {} as FinanceContextData
);

export function FinanceProvider({ children }: FinanceProviderProps) {
  const [token, setToken] = useState(localStorage.getItem("myWalletToken"));
  const [finance, setFinance] = useState<IFinance>();
  const [financeData, setFinanceData] = useState<IFinance[]>([]);

  useEffect(() => {
    async function setData() {
      const { data } = await app.get("/finance", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFinanceData(data);
    }

    try {
      setData();
    } catch (err) {
      console.log(err);
    }
  }, [finance]);

  async function financeInput(financeInput: FinanceInput): Promise<IFinance> {
    const token = localStorage.getItem("myWalletToken");
    const response = await app.post("/finance/create", financeInput, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { finance } = response.data;

    setFinance(finance);

    return finance;
  }

  return (
    <FinanceContext.Provider value={{ financeInput, financeData }}>
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  return useContext(FinanceContext);
}
