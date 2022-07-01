import { GeneralTitle } from "../../styles/globalStyle";
import * as Style from "../../styles/generalStyle";
import { FormEvent, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { GeneralModal } from "../GeneralModal";

export function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  const userContext = useUser();
  const navigate = useNavigate();

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (password !== confirmPassword) {
      return handleShow();
    }

    const newUserData = {
      name,
      email,
      password,
    };

    try {
      await userContext.userSignUp(newUserData);

      return navigate("/");
    } catch (e) {
      return handleShow();
    }
  }

  return (
    <Style.GeneralContainer>
      <GeneralTitle>My Wallet</GeneralTitle>
      <Style.GeneralForm onSubmit={(event) => handleFormSubmit(event)}>
        <Style.GeneralInput
          onChange={(event) => setName(event.target.value)}
          type={"text"}
          placeholder="Nome"
          required
        />
        <Style.GeneralInput
          onChange={(event) => setEmail(event.target.value)}
          type={"text"}
          placeholder="E-mail"
          required
        />
        <Style.GeneralInput
          onChange={(event) => setPassword(event.target.value)}
          type={"password"}
          placeholder="Senha"
          required
        />
        <Style.GeneralInput
          onChange={(event) => setConfirmPassword(event.target.value)}
          type={"password"}
          placeholder="Confirme a senha"
          required
        />
        <Style.GeneralButton type={"submit"}>Cadastrar</Style.GeneralButton>
      </Style.GeneralForm>
      <Style.GeneralSpan>
        Já tem uma conta? <a href={"/"}>Entre agora!</a>
      </Style.GeneralSpan>
      <GeneralModal
        showModal={show}
        handleClose={handleClose}
        modalTitle={"Oops!! Alguma coisa deu errado!"}
        modalMessage={"Por favor, verifique os campos e tente novamente."}
      />
    </Style.GeneralContainer>
  );
}
