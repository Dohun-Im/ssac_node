import React from "react";
import FullCenterContainer from "../components/common/container/FullCenterContainer";
import SignupContainer from "../containers/auth/SingupContainer";

function Signup() {
  return (
    <>
      <FullCenterContainer>
        <SignupContainer />
      </FullCenterContainer>
    </>
  );
}

export default Signup;
