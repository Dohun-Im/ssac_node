import React from "react";
import styled from "styled-components";
import BorderBox from "../box/BorderBox";
import { GoLightBulb, GoComment } from "react-icons/go";

import { GrShareOption } from "react-icons/gr";

const BodyTop = styled.div`
  height: 3rem;
  position: inherit;
  width: 100%;
  background: #ffffff;
  margin-bottom: 2rem;
`;

const ProfileWrap = styled.div`
  align-items: center;
  height: 100%;
  width: 100%;
  display: flex;
`;

const ProfileBox = styled.div``;

const ProfileFlex = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  margin-left: 0.3rem;
  border-radius: 70%;
`;

const ProfileName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: brown;
  margin-left: 1.7rem;
`;

const PorfileJob = styled.div`
  margin-left: 1.7rem;
  font-size: 1.2rem;
  color: grey;
`;

const ProfileTime = styled.div`
  margin: 5px 0 0 1.8rem;
  color: grey;
`;

const BodyContent = styled.div`
  padding: 1rem;
  height: 28rem;
  width: 100%;
  align-items: center;
`;

const BodyText = styled.div`
  height: 10rem;
  font-size: 1.4rem; ;
`;

const WarpButton = styled.button`
  max-height: 2rem;
  line-height: 2rem;
  background: #ffffff;
  border: 0;
`;

const BodyView = styled.div`
  height: 12rem;
  background: #f5f5f4;
  display: flex;
  margin-top: 5rem;
`;

const PreviewText = styled.div``;

const PreviewName = styled.div`
  font-size: 1.5rem;
  margin-left: 1.7rem;
  margin-top: 1.7rem;
`;

const PreviewSrc = styled.div`
  font-size: 1rem;
  color: grey;
  margin: 1.7rem;
`;

const PreviewImg = styled.img`
  margin: 1.7rem 1.7rem 1.7rem auto;
  width: 8.6rem;
  height: 8.6rem;
`;

const BottomLikes = styled.div`
  display: flex;
  height: 4rem;
  position: relative;
`;

const LikesImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 70%;
  overflow: hidden;
  & + & {
    margin-left: -0.6rem;
  }
`;

const BottmeText = styled.div`
  font-size: 1.3rem;
  line-height: 3rem;
  margin-left: 0.8rem;
  display: flex;
`;

const Strong = styled.div`
  font-weight: bold;
`;

const BodyBottom = styled.div`
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  margin-top: 2rem;
`;

const IconWrap = styled.div`
  display: flex;
  margin-left: auto;
`;

const IconName = styled.div`
  margin-left: 1rem;
`;

const IconNameBorder = styled.div`
  border-right: 1px solid;
  margin: 0 15px 0 1rem;
  padding-right: 15px;
`;

function ContentComponent() {
  return (
    <BorderBox>
      <BodyTop>
        <ProfileWrap>
          <ProfileImg
            src={
              "	https://file3.instiz.net/data/file3/2020/09/01/3/6/1/3610820a294a002f407f9abe581cb6ed.jpg"
            }
          />
          <ProfileBox>
            <ProfileFlex>
              <ProfileName>임도훈</ProfileName>
              <PorfileJob>SSAC3기 교육생</PorfileJob>
            </ProfileFlex>
            <ProfileTime>30분 전</ProfileTime>
          </ProfileBox>
        </ProfileWrap>
      </BodyTop>
      <BodyContent>
        <BodyText>
          [ 프런트 숙제 ]
          <br />
          <br />
          CSS 는 사용자에게 문서를 표시하는 방법을 지정하는 언어입니다
          <br />
          <br /> — 스타일, 레이아웃 등. 문서는 일반적으어를 사용하여 구성된
          텍스트 파일입니다
          <br />
          <br />— HTML 이 가장 일반적인 마크 업로 마크 업 언 언어이지만,
          <br />
          <br /> SVG 또는 XML (en-US) 과 같은 다른 마크 업 언어를 사용할 수도
          있습니다.
          <WarpButton>...더보기</WarpButton>
          <br />
        </BodyText>
        <BodyView>
          <PreviewText>
            <PreviewName>ReactCSS구축</PreviewName>
            <PreviewSrc>Velog</PreviewSrc>
          </PreviewText>
          <PreviewImg
            src={
              "http://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9kS/image/HxLBIemK8yUgt2lsC-9L9WsAWZI.jpeg"
            }
          />
        </BodyView>
      </BodyContent>
      <BottomLikes>
        <LikesImg
          src={
            "https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525023300360gnuh.jpg"
          }
        />
        <LikesImg
          src={
            "https://mblogthumb-phinf.pstatic.net/MjAxNzExMDhfMTU1/MDAxNTEwMTI2MDYyOTEz.AalwGZu_XhE8hfc4o25GpDyZbN_jWmJ9k64o2DYZPVog.uaY6G2tPIUe_cMVF6FckEK2P-u_j23OfoeKqUWdh9-cg.JPEG.knightsws/%EB%AC%B4%EB%A3%8C_%EA%B0%95%EC%95%84%EC%A7%80_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8_8.JPEG?type=w800"
          }
        />
        <LikesImg
          src={
            "https://ww.namu.la/s/50ec79e07868dd8be7c62f3ca97267517b4f7b8d43b05470c645b336541fdd3593e3a3469a82a8c904f050382ff3c8551606ac7de623941d726582f74a03670a7f0972e3a8439ec9911ee60a1a5c76e1856d5e55e53a42f365f1c95a145ef612"
          }
        />
        <BottmeText>
          <Strong>33명</Strong>이 추천했어요.
        </BottmeText>
      </BottomLikes>
      <BodyBottom>
        <GoLightBulb />
        <IconName> 추천해요 </IconName>
        <IconWrap>
          <GrShareOption />
          <IconNameBorder> 공유하기</IconNameBorder>
          <GoComment />
          <IconName> 댓글 </IconName>
        </IconWrap>
      </BodyBottom>
    </BorderBox>
  );
}

export default ContentComponent;
