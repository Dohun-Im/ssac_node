import React from "react";
import styled from "styled-components";
import RoundedButton from "../common/button/RoundedButton";
import { BsTrashFill, BsGearFill } from "react-icons/bs";
import LoadingComponent from "../common/loading/LoadingComponent";

const DetailWrap = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailContainer = styled.div`
  width: 70rem;
`;

const DetailTitle = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  text-align: left;
  width: 100%;
`;

const DetailTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailIconWrap = styled.div`
  display: flex;
  align-items: center;
`;

const DetailHR = styled.hr`
  margin: 2rem 0;
`;

const DetailContent = styled.div`
  font-size: 2rem;
  min-height: 20rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;

const StyledBackButton = styled(RoundedButton)`
  background: grey;
  width: 10rem;
`;

const StyledGearIcon = styled(BsGearFill)`
  color: grey;
  font-size: 1.7rem;
  cursor: pointer;
`;

const StyledTrashIcon = styled(BsTrashFill)`
  color: grey;
  font-size: 1.7rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

function DetailComponent({
  loading,
  boardData,
  onClickBack,
  onClickDelete,
  profile,
}) {
  //   const { title, content } = boardData;
  //   console.log(data);
  //   const { title, content } = data;
  //   if (title === !null)

  //{boardData && (하는 이유는 boardData에 초기화된 값이 null인지 확인해야 하기 때문!
  // 처음에는 null이 들어오지만 통신 이후에야 title과 content가 오기 때문
  //   console.log(profile);
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        boardData && (
          <DetailWrap>
            <DetailContainer>
              <DetailTitleWrap>
                <DetailTitle>{boardData.title}</DetailTitle>
                <DetailIconWrap>
                  {profile &&
                    (profile._id === boardData.writer ? (
                      <>
                        <StyledGearIcon />
                        <StyledTrashIcon onClick={onClickDelete} />
                      </>
                    ) : (
                      <></>
                    ))}
                </DetailIconWrap>
              </DetailTitleWrap>
              <DetailHR />
              <DetailContent
                dangerouslySetInnerHTML={{ __html: boardData.content }}
              />
              <ButtonWrap>
                <StyledBackButton onClick={onClickBack}>
                  뒤로가기
                </StyledBackButton>
              </ButtonWrap>
            </DetailContainer>
          </DetailWrap>
        )
      )}
    </>
  );
}

export default DetailComponent;
