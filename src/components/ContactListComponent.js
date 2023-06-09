import React from "react";
import styled from "styled-components";
import { contactList } from "../mockData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-right: 2px solid #d3d3d3;
  flex: 1.6;
`;
const PortraitInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #add8e6;
  padding: 10px;
`;
const PortraitImage = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  padding: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%
  padding: 5px 10px;
  gap: 8px;
`;

const SearchIcon = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 50%;
`;
export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  border-radius: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #f2f2f2;
  padding: 15px 12px;
  :hover {
    background: #ebebeb;
  }
`;

const PortraitIcon = styled(PortraitImage)`
  width: 38px;
  height: 37px;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  object-fit: cover;
`;

const ContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 12px;
`;

const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

const MessageText = styled.span`
  width: 100%;
  margin-top: 3px;
  font-size: 14px;
  color: #8e8e8e;
`;

const MessageTime = styled.span`
  margin-right: 12px;
  font-size: 12px;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.42);
`;

const ContactComponent = (props) => {
  const { userData, setChat } = props;
  return (
    <ContactItem onClick={() => setChat(userData)}>
      <PortraitIcon src={userData.portraitPic} />
      <ContactInfo>
        <ContactName>{userData?.name}</ContactName>
        <MessageText>{userData?.lastText}</MessageText>
      </ContactInfo>
      <MessageTime>{userData?.lastTextTime}</MessageTime>
    </ContactItem>
  );
};
const ContactListComponent = (props) => {
  return (
    <Container>
      <PortraitInfoDiv>
        <PortraitImage src="/portrait/Sunakshi.png" />
      </PortraitInfoDiv>
      <SearchBox>
        <SearchContainer>
          <SearchIcon src={"/portrait/search-icon.jpg"} />
          <SearchInput placeholder="Search" />
        </SearchContainer>
      </SearchBox>
      {contactList.map((userData) => (
        <ContactComponent userData={userData} setChat={props.setChat} />
      ))}
    </Container>
  );
};
export default ContactListComponent;
