import React from "react";
import styled from "styled-components";

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
  background: #f6f6f6;
  display: flex;
  padding: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 17px;
  width: 100%
  padding: 5px 10px;
`;

const SearchIcon = styled.img`
  width: 27px;
  height: 27px;
`;
const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  border-radius: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  cursor: pointer;
  border-bottom: 1px solid #f2f2f2;
  padding: 15px 12px;
`;

const PortraitIcon = styled(PortraitImage)`
  width: 38px;
  height: 37px;
`;

const ContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 14px;
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

const ContactComponentList = () => {
  return (
    <ContactItem>
      <PortraitIcon src="/portrait/Sunakshi.png" />
      <ContactInfo>
        <ContactName>Sunakshi Thapar</ContactName>
        <MessageText>Hello!</MessageText>
      </ContactInfo>
      <MessageTime>03:16 PM</MessageTime>
    </ContactItem>
  );
};
const ContactComponent = () => {
  return (
    <Container>
      <PortraitInfoDiv>
        <PortraitImage src="/portrait/Sunakshi.png" />
      </PortraitInfoDiv>
      <SearchBox>
        <SearchContainer>
          <SearchIcon src="/portrait/search-icon.jpg" />
          <SearchInput placeholder="Search" />
        </SearchContainer>
      </SearchBox>
      <ContactComponentList />
      <ContactComponentList />
      <ContactComponentList />
    </Container>
  );
};
export default ContactComponent;
