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

const JourneyItem = ({
  id,
  name,
  status,
  recipients,
  success,
}: IJourneyItem) => {
  const filterJourneyStatus = () => {
    switch (+status) {
      case 1:
        return <JourneyStatus description="Em execução" status={status} />;
      case 2:
        return <JourneyStatus description="Ativa" status={status} />;
      case 3:
        return <JourneyStatus description="Configurando" status={status} />;
      case 4:
        return <JourneyStatus description="Ociosa" status={status} />;
      case 5:
        return <JourneyStatus description="Concluída" status={status} />;
      default:
        break;
    }
    return "";
  };
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
