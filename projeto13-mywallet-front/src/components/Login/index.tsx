import { GeneralTitle } from "../../styles/globalStyle";
import {
  SignUpSignInForm,
  SignUpSignInInput,
  SignUpSignInButton,
  SignUpSignInSpan,
  SignUpSingInContainer,
} from "../../styles/signInSignUpStyle";

export function Login() {
  return (
    <SignUpSingInContainer>
      <GeneralTitle>My Wallet</GeneralTitle>
      <SignUpSignInForm>
        <SignUpSignInInput type={"text"} placeholder="E-mail" />
        <SignUpSignInInput type={"text"} placeholder="Senha" />
        <SignUpSignInButton type={"submit"}>Entrar</SignUpSignInButton>
      </SignUpSignInForm>
      <SignUpSignInSpan>
        Primeira vez? <a>Cadastre-se!</a>
      </SignUpSignInSpan>
    </SignUpSingInContainer>
  );
}
