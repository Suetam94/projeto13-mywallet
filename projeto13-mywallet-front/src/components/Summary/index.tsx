import { GeneralH2Title } from "../../styles/generalStyle";
import {
  Container,
  Header,
  SummaryBox,
  EmptyText,
  InputsAndOutputsContainer,
  InputsAndOutputsBox,
  InputsAndOutputsText,
} from "./summaryStyle";
import { MinusCircle, PlusCircle, SignOut } from "phosphor-react";

export function Summary() {
  return (
    <Container>
      <Header>
        <GeneralH2Title>Olá, Mateus</GeneralH2Title>
        <a href="/">
          <SignOut
            style={{ cursor: "pointer" }}
            color={"#fff"}
            size={24}
            weight="bold"
          />
        </a>
      </Header>
      <SummaryBox>
        <EmptyText>Não há registros de entrada ou saída</EmptyText>
      </SummaryBox>
      <InputsAndOutputsContainer>
        <InputsAndOutputsBox href={"/new?inbound=true"}>
          <PlusCircle size={25} color={"#FFF"} />
          <InputsAndOutputsText>Nova entrada</InputsAndOutputsText>
        </InputsAndOutputsBox>
        <InputsAndOutputsBox href={"/new?inbound=false"}>
          <MinusCircle size={25} color={"#FFF"} />
          <InputsAndOutputsText>Nova saída</InputsAndOutputsText>
        </InputsAndOutputsBox>
      </InputsAndOutputsContainer>
    </Container>
  );
}
