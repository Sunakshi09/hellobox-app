import React from "react";
import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 3;
  background-color: #f5f5f5;
`;

const PortraitHeader = styled.div`
  background: #ededed;
  padding: 11px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const PortraitImage = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
`;

const ChatBox = styled.div`
  background: #f0f0f0;
  height: 100%;
  width: 100%
  display: flex;
  padding: 10px;
   bottom: 0;
  align-items: center;
`;
const EmojiImage = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.7;
  border-radius: 50%;
  cursor: pointer;
`;

const TalkComponent = () => {
  return (
    <Container>
      <PortraitHeader>
        <PortraitImage src="/portrait/Sunakshi.png" />
        Sunakshi Thapar
      </PortraitHeader>
      <ChatBox>
        <SearchContainer>
          <EmojiImage src={"/smiley.jpg"} />
          <SearchInput placeholder="Type a message" />
        </SearchContainer>
      </ChatBox>
    </Container>
  );
};
export default TalkComponent;
