import React, { useState } from "react";
import SigninComponent from "../../components/auth/SigninComponent";
import axios from "axios";

function SigninContainer() {
  const baseURL = "http://localhost:3000";

  const [userInfo, setUserInfo] = useState({
    userId: "",
    password: "",
  });

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    console.log(`name : ${name}`);
    console.log(`value : ${value}`);

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: `${baseURL}/ssac/auth/signin`,
        data: userInfo,
      });

      if (result === 200) {
        console.log("로그인 성공");
      }
    } catch (error) {
      console.log(error.response);
      const errorStatus = error.response.status;
      if (errorStatus === 409) {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        alert("서버에러 발생!");
      }
    }
  };
  return (
    <SigninComponent
      userInfo={userInfo}
      onChangeInput={onChangeInput}
      onSubmit={onSubmit}
    />
  );
}

export default SigninContainer;
