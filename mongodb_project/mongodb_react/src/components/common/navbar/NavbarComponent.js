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
  height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  background: #ffffff;
`;
const Navcontainer = styled.div`
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

const NavLogo = styled.div`
  font-size: 2rem;
  font-weight: bolder;
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
  align-items: conter;
  height: 100%;
`;

const NavStyledIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;

  & + & {
    //NavStledIcon 끼리 근접해 있다면! 이라는 뜻
    margin-left: 1rem; //두번째 세번째만 left에 마진값 들어감
  }
`;

const NavProfileImge = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  margin-left: 3rem;
`;

function NavbarComponent() {
  return (
    <>
      <NavbarWrap>
        <Navcontainer>
          <NavFrontWrap>
            <NavLogo>SSAC</NavLogo>
            <NavLinkWrap>
              <NavStyledLink to="/signin">로그인</NavStyledLink>
              <NavStyledLink to="/signup">회원가입</NavStyledLink>
            </NavLinkWrap>
          </NavFrontWrap>
          <NavProfileWrap>
            <NavIconsWrap>
              <NavStyledIcon>
                <AiOutlineSearch style={{ fontSize: "2rem" }} />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineComment />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineBell />
              </NavStyledIcon>
            </NavIconsWrap>
            <NavProfileImge
              src={
                "https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
              }
            />
          </NavProfileWrap>
        </Navcontainer>
      </NavbarWrap>
    </>
  );
}

export default NavbarComponent;
