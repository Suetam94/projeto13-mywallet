import { GeneralTitle } from "../../styles/globalStyle";
import * as Style from "../../styles/generalStyle";
import { FormEvent, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { GeneralModal } from "../GeneralModal";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  const navigate = useNavigate();

  const { token, userLogin } = useUser();

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      await userLogin(loginData);

      localStorage.setItem("myWalletToken", JSON.stringify(token));

      const localToken = localStorage.getItem("myWalletToken");

      if (localToken) {
        return navigate("/summary");
      }
    } catch (e) {
      return handleShow();
    }
  }

  return (
    <Style.GeneralContainer>
      <GeneralTitle>My Wallet</GeneralTitle>
      <Style.GeneralForm onSubmit={(event) => handleFormSubmit(event)}>
        <Style.GeneralInput
          onChange={(event) => setEmail(event.target.value)}
          type={"text"}
          placeholder="E-mail"
        />
        <Style.GeneralInput
          onChange={(event) => setPassword(event.target.value)}
          type={"password"}
          placeholder="Senha"
        />
        <Style.GeneralButton type={"submit"}>Entrar</Style.GeneralButton>
      </Style.GeneralForm>
      <Style.GeneralSpan>
        Primeira vez? <a href={"/signup"}>Cadastre-se!</a>
      </Style.GeneralSpan>
      <GeneralModal
        showModal={show}
        handleClose={handleClose}
        modalTitle={"Oops!! Não foi possível fazer a autenticação"}
        modalMessage={"Verifique suas credenciais e tente novamente."}
      />
    </Style.GeneralContainer>
  );
}
