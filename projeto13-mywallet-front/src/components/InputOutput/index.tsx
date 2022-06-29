import React from "react";

import * as Style from "../../styles/generalStyle";
import useQuery from "../../hooks/useQuery";

export function InputOutput() {
  const isInbound = useQuery().get("inbound");

  return (
    <Style.GeneralContainer
      style={{ justifyContent: "flex-start", marginTop: "25px" }}
    >
      <Style.GeneralH2Title>
        {isInbound === "true" ? "Nova entrada" : "Nova saída"}
      </Style.GeneralH2Title>
      <Style.GeneralForm>
        <Style.GeneralInput type={"text"} placeholder="Valor" />
        <Style.GeneralInput type={"text"} placeholder="Descrição" />
        <Style.GeneralButton>
          {isInbound === "true" ? "Salvar entrada" : "Salvar saída"}
        </Style.GeneralButton>
      </Style.GeneralForm>
    </Style.GeneralContainer>
  );
}
