import React from "react";

import { useDataValue } from "src/context/JourneysContext";

import FilterItem from "../FilterItem";
import { Container } from "./styles";

const Filter = () => {
  const [{ filter }] = useDataValue();
  return (
    <Container>
      {filter.map((filterItem) => (
        <FilterItem
          id={filterItem.id}
          quantity={filterItem.quantity}
          name={filterItem.name}
          key={filterItem.id}
        />
      ))}
    </Container>
  );
};
export default Filter;
