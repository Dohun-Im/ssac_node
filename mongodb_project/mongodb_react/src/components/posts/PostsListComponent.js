import React from "react";
import styled from "styled-components";
import LoadingComponent from "../common/loading/LoadingComponent";
import PostItemComponent from "../post/PostItemComponent";

const PostListWrap = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PostsListComponent({ postsList, onClickPost, loading }) {
  console.log(postsList);
  return (
    //태그안에 js를 써야하므로 {} 먼저 써주어야함, ()는 바로 return, {}는 retruns 써줌
    //loading 이 true 일때만 loading컴포넌트를 띄어주고 아닐때는 안띄어줌
    //{loading ? <LoadingComponent /> : <></>}
    // {loading && <LoadingComponent /> }
    <>
      {loading ? <LoadingComponent /> : <></>}
      <PostListWrap>
        {postsList.map((item, index) => (
          <PostItemComponent
            key={index}
            post={item}
            onClickPost={onClickPost}
          />
        ))}
      </PostListWrap>
    </>
  );
}

export default PostsListComponent;
