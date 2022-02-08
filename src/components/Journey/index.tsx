import React, { useEffect } from "react";

import { useDataValue } from "../../context/JourneysContext";
import api from "../../services/api";
import JourneyItem from "../JourneyItem";
import {
  Container,
  Header,
  JourneyName,
  JourneyRecipient,
  JourneyStatus,
  JourneySuccess,
} from "./styles";

const Journey = () => {
  const [{ journey }, dispatch] = useDataValue();

  const getJourneysData = () => {
    api.get("journey").then((response) =>
      dispatch({
        type: "SET_JOURNEY",
        journey: response.data,
      })
    );
  };

  useEffect(() => {
    getJourneysData();
  }, [dispatch, journey]);

  return (
    <Container>
      <Header>
        <JourneyName>Nome</JourneyName>
        <JourneyRecipient>Destinatários</JourneyRecipient>
        <JourneySuccess>Sucesso</JourneySuccess>
        <JourneyStatus>Status</JourneyStatus>
      </Header>

      <div>
        {journey.map((journeyItem) => (
          <JourneyItem
            id={journeyItem.id}
            status={journeyItem.status}
            recipients={journeyItem.recipients}
            name={journeyItem.name}
            success={journeyItem.success}
            key={journeyItem.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default Journey;
