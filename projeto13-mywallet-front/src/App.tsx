import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./styles/globalStyle";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Summary } from "./components/Summary";
import { InputOutput } from "./components/InputOutput";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/summary"} element={<Summary />} />
          <Route path={"/new"} element={<InputOutput />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
