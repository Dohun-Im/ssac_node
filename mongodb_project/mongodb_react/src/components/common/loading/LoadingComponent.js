import React, { useEffect } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const LoadingWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
`;

function LoadingComponent() {
  useEffect(() => {
    document.body.style.overflow = "hidden"; //로딩 중 배경화면 스크롤 안되게
    return () => {
      //useEffect 내에서 return 하면 첫 렌더링 끝나면 나옴 -> 마무리 함수
      console.log("로딩 렌더링 사라짐");
      document.body.style.overflow = "visible";
    };
  }, []); //마지막 빈배열하면 초기 랜더링 되었을때 1회 실행

  return (
    <LoadingWrap>
      <ReactLoading type={"spin"} color={"orange"} />
    </LoadingWrap>
  );
}

export default LoadingComponent;
