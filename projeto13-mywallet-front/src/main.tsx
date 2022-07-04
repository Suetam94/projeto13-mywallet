import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { UserProvider } from "./hooks/useUser";
import { FinanceProvider } from "./hooks/useFinance";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <FinanceProvider>
        <App />
      </FinanceProvider>
    </UserProvider>
  </React.StrictMode>
);
