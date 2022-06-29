import { GeneralTitle } from "../../styles/globalStyle";
import * as Style from "../../styles/generalStyle";

export function SignUp() {
  return (
    <Style.GeneralContainer>
      <GeneralTitle>My Wallet</GeneralTitle>
      <Style.GeneralForm>
        <Style.GeneralInput type={"text"} placeholder="Nome" />
        <Style.GeneralInput type={"text"} placeholder="E-mail" />
        <Style.GeneralInput type={"password"} placeholder="Senha" />
        <Style.GeneralInput type={"password"} placeholder="Confirme a senha" />
        <Style.GeneralButton type={"submit"}>Cadastrar</Style.GeneralButton>
      </Style.GeneralForm>
      <Style.GeneralSpan>
        Já tem uma conta? <a href={"/"}>Entre agora!</a>
      </Style.GeneralSpan>
    </Style.GeneralContainer>
  );
}
