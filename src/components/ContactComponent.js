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
  width: 29px;
  height: 29px;
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
  width: 100%;
  background: white;
  cursor: pointer;
  border-bottom: 1px solid #f2f2f2;
  padding: 15px 10px;
`;

const PortraitIcon = styled(PortraitImage)`
  width: 37px;
  height: 37px;
`;

const ContactComponentList = () => {
  return (
    <ContactItem>
      <PortraitIcon src="/portrait/Sunakshi.png" />
      "ContactComponentList"
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
    </Container>
  );
};
export default ContactComponent;
