import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import DetailComponent from "../../components/post/DetailComponent";
import axios from "axios";

const baseURL = "http://localhost:3000";

function DetailContainer({ profile }) {
  const params = useParams(); //readDetailId를 해야하기때문에 id값이 필요하므로 받아와야함
  const { postId } = params;
  //   console.log(postId);

  const history = useHistory();

  const [boardData, setBoardData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDetailData() {
      setLoading(true);
      try {
        const response = await axios({
          method: "GET",
          url: `${baseURL}/ssac/board/${postId}`,
        });
        // console.log(response);
        if (response.status === 200) {
          const result = response.data.data;

          //   console.log(result);
          setBoardData(result);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getDetailData();
  }, []);

  // console.log(data)
  // const { title } = data.title;
  // console.log(title);

  const onClickBack = () => {
    history.goBack();
  };

  const onClickDelete = async () => {
    const token = localStorage.getItem("accessToken");

    setLoading(true);
    try {
      const response = await axios({
        method: "DELETE",
        url: `${baseURL}/ssac/board/${postId}`,
        headers: { authorization: token },
      });
      //   console.log(response);
      if (response.status === 200) {
        console.log("게시물 삭제 완료");
        setLoading(false);
        history.goBack();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <DetailComponent
      loading={loading}
      boardData={boardData}
      onClickBack={onClickBack}
      onClickDelete={onClickDelete}
      profile={profile}
    />
  );
}

export default DetailContainer;
