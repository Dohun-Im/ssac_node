import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineComment,
} from "react-icons/ai";
// import { FaRegCommentDots } from "react-icons/fa";

const NavbarWrap = styled.div`
  height: 7rem;
  border-bottom: 0.1px solid #778899 rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  background: #ffffff;
`;

const NavContainer = styled.div`
  max-width: 99.6rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavFrontWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavLogo = styled.img`
  width: 13rem;
  height: 3rem;
`;

const NavLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3rem;
`;

const NavStyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: normal;
  text-decoration: none;
  color: #000000;
  margin-right: 10px;
`;

const NavProfileWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavIconsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavStyledIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-left: 2rem;
  }
`;

const NavProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  margin-left: 3rem;
  border-radius: 70%;
`;

function NavbarComponent() {
  return (
    <>
      <NavbarWrap>
        <NavContainer>
          <NavFrontWrap>
            <NavLogo
              src={
                "https://careerly.co.kr/_next/static/images/img-logo-789fb5a9000960c8e86ed6e1a0f54a2f.png"
              }
            />
            <NavLinkWrap>
              <NavStyledLink>프로필 탐색</NavStyledLink>
              <NavStyledLink>인턴 채용 공고</NavStyledLink>
            </NavLinkWrap>
          </NavFrontWrap>
          <NavProfileWrap>
            <NavIconsWrap>
              <NavStyledIcon>
                <AiOutlineSearch />
              </NavStyledIcon>

              <NavStyledIcon>
                <AiOutlineComment />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineBell />
              </NavStyledIcon>
            </NavIconsWrap>
            <NavProfileImg
              src={
                "	https://file3.instiz.net/data/file3/2020/09/01/3/6/1/3610820a294a002f407f9abe581cb6ed.jpg"
              }
            />
          </NavProfileWrap>
        </NavContainer>
      </NavbarWrap>
    </>
  );
}

export default NavbarComponent;
