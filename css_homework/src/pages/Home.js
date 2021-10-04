import React from "react";
import FullcenterContainer from "../components/common/container/FullcenterContainer";
import ContentContainer from "../containers/common/ContentContainer";

function Home() {
  return (
    <>
      <FullcenterContainer>
        <ContentContainer />
        <ContentContainer />
      </FullcenterContainer>
    </>
  );
}

export default Home;
