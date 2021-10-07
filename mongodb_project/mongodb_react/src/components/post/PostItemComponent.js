import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const ItemBox = styled.div`
  border: 1px solid grey;
  padding: 1rem;
  box-sizing: border-box;
  width: 50rem;
  cursor: pointer;
  & + & {
    margin-top: 1rem;
  }
`;

const ItemTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

const ItemInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemWriter = styled.div`
  font-size: 1.4rem;
  font-weight: normal;
  color: grey;
`;

const ItemCreateDate = styled.div`
  font-size: 1.4rem;
  font-weight: normal;
  color: grey;
`;

const ItemContent = styled.div`
  font-size: 1.6rem;
  font-weight: normal;
  padding: 1rem 0;
`;

function PostItemComponent({ post, onClickPost }) {
  const { title, content, writer, writeTime, _id } = post;
  const formatDate = dayjs(writeTime).format("YYYY-MM-DD");
  console.log(_id);
  return (
    //// 매개변수 쓰려면 익명함수 써야함!!!!!!!!
    <ItemBox onClick={() => onClickPost(_id)}>
      <ItemTitle>{title}</ItemTitle>
      <ItemInfoWrap>
        <ItemWriter>{writer && writer.name}</ItemWriter>
        <ItemCreateDate>{formatDate}</ItemCreateDate>
      </ItemInfoWrap>
      <hr />
      <ItemContent dangerouslySetInnerHTML={{ __html: content }} />
    </ItemBox>
  );
}

export default PostItemComponent;
