import { GeneralH2Title } from "../../styles/generalStyle";
import {
  Container,
  Header,
  SummaryBox,
  EmptyText,
  InputsAndOutputsContainer,
  InputsAndOutputsBox,
  InputsAndOutputsText,
  FinancesContentContainer,
  FinancesContentData,
  FinancesContentTitle,
  FinancesContentValue,
} from "./summaryStyle";
import { MinusCircle, PlusCircle, SignOut } from "phosphor-react";
import { useFinance } from "../../hooks/useFinance";
import { format } from "date-fns";

export function Summary() {
  const { financeData } = useFinance();

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
        {financeData.length > 0 ? (
          financeData.map(({ createdAt, description, entry, entryType }) => {
            return (
              <FinancesContentContainer>
                <FinancesContentData>
                  {format(new Date(createdAt), "dd/MM")}
                </FinancesContentData>
                <FinancesContentTitle>{description}</FinancesContentTitle>
                <FinancesContentValue
                  style={{
                    color: entryType === "outbound" ? "#C70000" : "#03AC00",
                  }}
                >
                  {(entry / 100).toFixed(2).replace(".", ",")}
                </FinancesContentValue>
              </FinancesContentContainer>
            );
          })
        ) : (
          <EmptyText>Não há registros de entrada ou saída</EmptyText>
        )}
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
