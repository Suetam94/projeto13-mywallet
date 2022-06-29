import { GeneralTitle } from "../../styles/globalStyle";
import * as Style from "../../styles/generalStyle";

export function Login() {
  return (
    <Style.GeneralContainer>
      <GeneralTitle>My Wallet</GeneralTitle>
      <Style.GeneralForm>
        <Style.GeneralInput type={"text"} placeholder="E-mail" />
        <Style.GeneralInput type={"text"} placeholder="Senha" />
        <Style.GeneralButton type={"submit"}>Entrar</Style.GeneralButton>
      </Style.GeneralForm>
      <Style.GeneralSpan>
        Primeira vez? <a href={"/signup"}>Cadastre-se!</a>
      </Style.GeneralSpan>
    </Style.GeneralContainer>
  );
}
