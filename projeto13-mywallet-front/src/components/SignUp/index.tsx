import { GeneralTitle } from "../../styles/globalStyle";
import {
  SignUpSignInForm,
  SignUpSignInInput,
  SignUpSignInButton,
  SignUpSignInSpan,
  SignUpSingInContainer,
} from "../../styles/signInSignUpStyle";

export function SignUp() {
  return (
    <SignUpSingInContainer>
      <GeneralTitle>My Wallet</GeneralTitle>
      <SignUpSignInForm>
        <SignUpSignInInput type={"text"} placeholder="Nome" />
        <SignUpSignInInput type={"text"} placeholder="E-mail" />
        <SignUpSignInInput type={"password"} placeholder="Senha" />
        <SignUpSignInInput type={"password"} placeholder="Confirme a senha" />
        <SignUpSignInButton type={"submit"}>Cadastrar</SignUpSignInButton>
      </SignUpSignInForm>
      <SignUpSignInSpan>
        Já tem uma conta? <a>Entre agora!</a>
      </SignUpSignInSpan>
    </SignUpSingInContainer>
  );
}
