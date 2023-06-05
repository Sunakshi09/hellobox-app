import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 3;
  background-color: #f5f5f5;
`;
const TalkComponent = () => {
  return <Container>"TalkComponent"</Container>;
};
export default TalkComponent;
