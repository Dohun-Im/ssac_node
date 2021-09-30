import React, { useState } from "react";
import SignupComponent from "../../components/auth/SignupComponent";
import axios from "axios";

function SignupContainer() {
  const baseURL = "http://localhost:3000";

  const [userInfo, setUserInfo] = useState({
    userId: "",
    name: "",
    password: "",
  });

  // const { userId, password, name } = userInfo;

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    console.log(`name : ${name}`);
    console.log(`value : ${value}`);

    setUserInfo({
      ...userInfo, //전개연산자 매우 중요. 기존에 있던 데이터를 풀어서 써줌
      [name]: value, // 이후 추가
    });
  };

  const onSubmit = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: `${baseURL}/ssac/auth/signup`,
        data: userInfo,
      });
      if (result === 200) {
        console.log("회원가입 성공");
      }
    } catch (error) {
      console.log(error.response);
      const errorStatus = error.response.status;
      if (errorStatus === 409) {
        alert("중복된 아이디가 존재합니다.");
      } else {
        alert("서버 에러가 발생했습니다.");
      }
    }
  };

  return (
    <SignupComponent
      userInfo={userInfo}
      onChageInput={onChangeInput}
      onSubmit={onSubmit}
    />
  );
}

export default SignupContainer;
