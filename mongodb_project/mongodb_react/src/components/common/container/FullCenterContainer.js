import React from "react";
import styled from "styled-components";

const ContainerWrap = styled.div`
  width: 100%;
  /* height: 100vh; */
  height: calc(100vh - 6rem);
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FullCenterContainer({ children }) {
  return (
    <>
      <ContainerWrap>{children}</ContainerWrap>
    </>
  );
}

export default FullCenterContainer;
