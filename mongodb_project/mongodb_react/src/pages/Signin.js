import React from "react";
import FullCenterContainer from "../components/common/container/FullCenterContainer";
import SigninContainer from "../containers/auth/SigninContainer";

function Signin() {
  return (
    <>
      <FullCenterContainer>
        <SigninContainer />
      </FullCenterContainer>
    </>
  );
}

export default Signin;
