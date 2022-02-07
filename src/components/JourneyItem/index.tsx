import React from "react";

import { Container } from "./styles";

interface IJourneyItem {
  id: string;
  name: string;
  status: string;
  recipients: string;
  success: string;
  key: string;
}

const JourneyItem = ({
  id,
  name,
  status,
  recipients,
  success,
  key,
}: IJourneyItem) => {
  const help = 2;
  return <></>;
};

export default JourneyItem;
