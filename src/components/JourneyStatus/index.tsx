import React from "react";

import { Container, Status } from "./styles";

interface IJourneyStatus {
  description: string;
  status: string;
}

const JourneyStatus = ({ description, status }: IJourneyStatus) => (
  <Container>
    <Status status={status} />

    <p>{description}</p>
  </Container>
);

export default JourneyStatus;
