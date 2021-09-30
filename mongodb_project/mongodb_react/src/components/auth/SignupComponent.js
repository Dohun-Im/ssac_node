import React from "react";
import styled from "styled-components";
import RoundedButton from "../common/button/RoundedButton";
import RoundedInput from "../common/input/RoundedInput";
import InputLabel from "../common/text/InputLabel";
import InputTitle from "../common/text/InputTitle";
import BorderBox from "../common/box/BorderBox";

const FormWrap = styled.div`
  margin-top: 2rem;
`;

const InputWrap = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;

const StyledRoundedButton = styled(RoundedButton)`
  background: #ed6652;
`;
//styled component를 받아와서 수정하는 방법이 가장 확장성이있음!!!!

function SignupComponent({ onChangeInput, userInfo, onSubmit }) {
  const { userId, name, password } = userInfo;

  return (
    <BorderBox>
      <InputTitle>회원가입</InputTitle>
      <FormWrap>
        <InputWrap>
          <InputLabel>유저 아이디</InputLabel>
          <RoundedInput name="userId" value={userId} onChange={onChangeInput} />
        </InputWrap>
        <InputWrap>
          <InputLabel>비밀번호</InputLabel>
          <RoundedInput
            name="password"
            value={password}
            onChange={onChangeInput}
          />
        </InputWrap>
        <InputWrap>
          <InputLabel>이름</InputLabel>
          <RoundedInput name="name" value={name} onChange={onChangeInput} />
        </InputWrap>
        <StyledRoundedButton onClick={onSubmit}>
          회원가입 신청
        </StyledRoundedButton>
      </FormWrap>
    </BorderBox>
  );
}

export default SignupComponent;
