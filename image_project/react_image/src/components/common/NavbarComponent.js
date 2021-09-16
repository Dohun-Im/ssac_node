//rfce치면 는 자동 컴포넌트 완성됨!!!
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// styled 란 styled컴포넌트를 받아옴
// 백틱 사이에 넣음

const NavWrap = styled.div`
  padding: 10px 30px;
  display: flex;
  border-bottom: 1px solid black;
`;

const LinkWrap = styled.div`
  font-size: 16px;
  font-weight: bolder;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  margin-right: 10px;

  &:hover {
    color: seagreen;
  }
`;

function NavbarComponent() {
  return (
    <>
      <NavWrap>
        <LinkWrap>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/upload">Upload</StyledLink>
        </LinkWrap>
      </NavWrap>
    </>
  );
}

export default NavbarComponent;
