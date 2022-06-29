import { Container, Title, Form, Input, Button, Span } from "./loginStyle";

export function Login() {
  return (
    <Container>
      <Title>My Wallet</Title>
      <Form>
        <Input type={"text"} placeholder="E-mail" />
        <Input type={"text"} placeholder="Senha" />
        <Button type={"submit"}>Entrar</Button>
      </Form>
      <Span>Primeira vez? <a>Cadastre-se!</a></Span>
    </Container>
  );
}
