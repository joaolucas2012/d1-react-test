import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import { Container, Wrapper } from "./styles";

function Home(): JSX.Element {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
      </Wrapper>
    </Container>
  );
}

export default Home;
