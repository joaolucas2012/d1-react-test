import { useEffect } from "react";

import Filter from "src/components/Filter";
import Journey from "src/components/Journey";
import { useDataValue } from "src/context/JourneysContext";
import api from "src/services/api";

import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import {
  Container,
  Content,
  FilterWrapper,
  JourneysWrapper,
  Wrapper,
} from "./styles";

function Home(): JSX.Element {
  const [journey, dispatch] = useDataValue();

  const getJourneysData = () => {
    if (journey) {
      api.get("filter").then(
        (response) =>
          dispatch({
            type: "SET_FILTER",
            filter: response.data,
          })
        //
      );
    }
  };

  useEffect(() => {
    getJourneysData();
  }, [dispatch, journey]);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />

        <Content>
          <FilterWrapper>
            <h2>Jornadas</h2>
            <Filter />
          </FilterWrapper>

          <JourneysWrapper>
            <Journey />
          </JourneysWrapper>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Home;
