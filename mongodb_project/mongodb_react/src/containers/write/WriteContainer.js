import React, { useState } from "react";
import WriteComponent from "../../components/write/WriteComponent";
import axios from "axios";
import { useHistory } from "react-router";

const baseURL = "http://localhost:3000";

function WriteContainer() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeBody = (text) => {
    console.log(text);
    setBody(text);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setTitle(value);
  };

  const onClickSubmit = async () => {
    const boardPw = "123";
    const axiosbody = {
      title: title,
      content: body,
      boardPw: boardPw,
    };
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios({
        url: `${baseURL}/ssac/board`,
        method: "POST",
        headers: { authorization: token }, // 중요!! post하려면 토큰값을 해더로 보내줘야하니까!
        data: axiosbody,
      });
      if (response.status === 200) {
        // console.log(response.data);
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WriteComponent
      onChangeBody={onChangeBody}
      body={body}
      onChangeInput={onChangeInput}
      title={title}
      onClickSubmit={onClickSubmit}
    />
  );
}

export default WriteContainer;
