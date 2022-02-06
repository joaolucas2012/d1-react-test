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
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />

        <Content>
          <FilterWrapper>
            <h2>Jornadas</h2>
            Filter component
          </FilterWrapper>

          <JourneysWrapper>Journeys component</JourneysWrapper>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Home;
