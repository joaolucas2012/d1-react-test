import React, { useState } from "react";

import { useDataValue } from "src/context/JourneysContext";
import api from "src/services/api";

import { Container, FilterItems, Name, Number, SvgIcon } from "./styles";

interface IFilterItem {
  id: string;
  quantity: number;
  name: string;
}

const FilterItem = ({ id, quantity, name }: IFilterItem) => {
  const [dispatch] = useDataValue();
  const [active, setActive] = useState(false);
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    setActive(!active);
    setCheck(event.target.check);
  };

  const chosenJourney = (id) => {
    if (id !== 0) {
      api.get(`journey/${id}`).then((response) =>
        dispatch({
          type: "SET_JOURNEY",
          journey: response.data,
        })
      );
    } else {
      api.get("journey").then((response) =>
        dispatch({
          type: "SET_JOURNEY",
          journey: response.data,
        })
      );
    }
  };

  return (
    <Container>
      <input
        type="checkbox"
        id={id}
        onChange={handleChange}
        onClick={() => chosenJourney(id)}
        data-active={active}
        defaultChecked={check}
      />
      <label htmlFor={id}>
        <FilterItems id={id} active={active}>
          <SvgIcon id={id} />

          <Name active={active}>{name}</Name>

          <Number active={active}> {quantity}</Number>
        </FilterItems>
      </label>
    </Container>
  );
};

export default FilterItem;
