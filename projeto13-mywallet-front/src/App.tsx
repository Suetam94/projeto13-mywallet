import { GlobalStyle } from "./styles/globalStyle";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <>
      {/*<Login />*/}
      <SignUp/>
      <GlobalStyle />
    </>
  );
}

export default App;
