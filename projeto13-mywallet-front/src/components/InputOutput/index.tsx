import React, { FormEvent, useState } from "react";

import * as Style from "../../styles/generalStyle";
import useQuery from "../../hooks/useQuery";
import { FinanceInput, useFinance } from "../../hooks/useFinance";
import { GeneralModal } from "../GeneralModal";
import { useNavigate } from "react-router-dom";

export function InputOutput() {
  const [entry, setEntry] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  const isInbound = useQuery().get("inbound");
  const finances = useFinance();

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    const formattedEntryValue = (Number(entry.replace(",", ".")) * 100).toFixed(
      0
    );

    const entryRequestData: FinanceInput = {
      entry: Number(formattedEntryValue),
      entryType: isInbound === "true" ? "inbound" : "outbound",
      description,
    };

    try {
      await finances.financeInput(entryRequestData);

      return navigate("/summary");
    } catch (e) {
      console.log(e);
      return handleShow();
    }
  }

  return (
    <Style.GeneralContainer
      style={{ justifyContent: "flex-start", marginTop: "25px" }}
    >
      <Style.GeneralH2Title>
        {isInbound === "true" ? "Nova entrada" : "Nova saída"}
      </Style.GeneralH2Title>
      <Style.GeneralForm onSubmit={(event) => handleFormSubmit(event)}>
        <Style.GeneralInput
          onChange={(event) => setEntry(event.target.value)}
          type={"text"}
          placeholder="Valor"
        />
        <Style.GeneralInput
          onChange={(event) => setDescription(event.target.value)}
          type={"text"}
          placeholder="Descrição"
        />
        <Style.GeneralButton>
          {isInbound === "true" ? "Salvar entrada" : "Salvar saída"}
        </Style.GeneralButton>
      </Style.GeneralForm>
      <GeneralModal
        showModal={show}
        handleClose={handleClose}
        modalTitle={"Oops!! Não foi possível cadastrar essa transação"}
        modalMessage={"Verifique os dados e tente novamente."}
      />
    </Style.GeneralContainer>
  );
}
