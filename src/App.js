import styled from "styled-components";
import ContactComponent from "./components/ContactComponent";
import TalkComponent from "./components/TalkComponent";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #c9e9f6;
`;

function App() {
  return (
    <Container>
      <ContactComponent />
      <TalkComponent />
    </Container>
  );
}

export default App;
