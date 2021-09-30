import styled from "styled-components";

const RoundedButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  border: none;
  box-sizing: border-box;
  background: slateblue;
  color: #ffffff;
  margin-top: 5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7; //마우스를 올리면~~
  }
`;

export default RoundedButton;
