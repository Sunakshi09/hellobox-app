import React, { useState } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { SearchContainer, SearchInput } from "./ContactListComponent";
import { messagesList } from "../mockData";

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
  align-items: center;
`;
const PortraitInfo = styled.div`
  display: flex;
  flex-direction: row;
  background: #add8e6;
  align-items: center;
  gap: 10px;
`;
const PortraitImage = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
`;
const ContactName = styled.span`
  font-size: 16px;
  color: black;
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

const MessageContainer = styled.div`
  min-height: 86%;
  background: #e5ddd6;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 15px;
`;

const Message = styled.div`
  background: ${(props) => (props.isYours ? "#b4f2fc" : "white")};
  max-width: 50%;
  font-size: 14px;
  color: #303030;
  border-radius: 6px;
  padding: 7px 10px;
`;
const EmojiImage = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.8;
  border-radius: 50%;
  cursor: pointer;
`;

function TalkComponent(props) {
  const { selectedChat } = props;
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);
  const [messageList, setMessageList] = useState(messagesList);
  const onEmojiClick = (event, emojiObj) => {
    setText(text + emojiObj.emoji);
    togglePicker(false);
  };
  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      const messages = [...messageList];
      messages.push({
        id: 0,
        messageType: "TEXT",
        text,
        senderID: 0,
        addedOn: "10:09 PM",
      });
      setMessageList(messages);
      setText("");
    }
  };
  return (
    <Container>
      <PortraitHeader>
        <PortraitInfo>
          <PortraitImage src={selectedChat.portraitPic} />
          <ContactName>{selectedChat.name}</ContactName>
        </PortraitInfo>
      </PortraitHeader>
      <MessageContainer>
        {messageList.map((messageData) => (
          <MessageDiv isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>
              {[messageData.text]}
            </Message>
          </MessageDiv>
        ))}
      </MessageContainer>
      <ChatBox>
        <SearchContainer>
          {pickerVisible && (
            <Picker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ position: "absolute", bottom: "55px" }}
            />
          )}
          <EmojiImage
            src={"/portrait/smiley.jpg"}
            onClick={() => togglePicker(!pickerVisible)}
          />
          <SearchInput
            placeholder="Type a message"
            value={text}
            onKeyDown={onEnterPress}
            onChange={(e) => setText(e.target.value)}
          />
        </SearchContainer>
      </ChatBox>
    </Container>
  );
}

export default TalkComponent;
