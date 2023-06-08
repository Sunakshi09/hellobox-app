import React, { useState } from "react";
import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponent";
import TalkComponent from "./components/TalkComponent";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #c9e9f6;
`;
const Placeholder = styled.div`
  font-size: 15px;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
  justify-content: center;
  gap: 10px;
  display: flex;
  flex: 3;
  flex-direction: column;
  span {
    font-size: 32px;
    color: #525252;
  }
`;

const ChatPlaceholder = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  object-fit: contain;
`;

function App() {
  const [selectedChat, setChat] = useState();
  return (
    <Container>
      <ContactListComponent setChat={setChat} />
      {selectedChat ? (
        <TalkComponent selectedChat={selectedChat} />
      ) : (
        <Placeholder>
          <ChatPlaceholder src="/portrait/hi-placeholder.gif" />
          <span>Keep your phone connected</span>
          And start chatting
        </Placeholder>
      )}
    </Container>
  );
}

export default App;
