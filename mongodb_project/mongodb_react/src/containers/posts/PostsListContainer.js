import PostsListComponent from "../../components/posts/PostsListComponent";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const baseURL = "http://localhost:3000";

function PostsListContainer() {
  const history = useHistory();

  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //useEffect 안에 바로 async 못씀. 내부에 함수 새로 만들어야

    async function getData() {
      setLoading(true); //데이터 가져오기 시작할때 로딩화면 띄움
      try {
        const response = await axios({
          method: "GET",
          url: `${baseURL}/ssac/board`,
        });
        // console.log(response);
        if (response.status === 200) {
          const result = response.data.data;
          console.log(result);
          setPostsList(result);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getData();
  }, []);

  const onClickPost = (postId) => {
    // console.log(postId);
    history.push(`/post/${postId}`);
  };

  return (
    <PostsListComponent
      loading={loading}
      onClickPost={onClickPost}
      postsList={postsList}
    />
  );
}

export default PostsListContainer;
