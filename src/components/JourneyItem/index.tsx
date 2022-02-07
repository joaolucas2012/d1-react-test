import React from "react";

import JourneyStatus from "../JourneyStatus";
import { Container, ItemName, ItemRecipient, ItemSuccess } from "./styles";

interface IJourneyItem {
  id: string;
  name: string;
  status: string;
  recipients: string;
  success: string;
}

const messages = [
  "Em execução",
  "Ativa",
  "Configurando",
  "Ociosa",
  "Concluída",
];

const JourneyItem = ({
  id,
  name,
  status,
  recipients,
  success,
}: IJourneyItem) => {
  const filterJourneyStatus = () => (
    <JourneyStatus description={messages[+status - 1]} status={status} />
  );
  return (
    <Container key={id}>
      <ItemName>{name}</ItemName>

      <ItemRecipient>{recipients}</ItemRecipient>

      <ItemSuccess>{success}</ItemSuccess>

      {filterJourneyStatus()}
    </Container>
  );
};
export default JourneyItem;
