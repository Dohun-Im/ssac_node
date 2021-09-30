import React, { useState } from "react";
import UploadComponent from "../../components/upload/UploadComponent";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import router from "../../../../db_test/routes/membership";

function UploadContainer() {
  const history = useHistory();

  const [fileUrl, setFileUrl] = useState(null); // 미리보기를 위한 파일경로

  const baseURL = "http://localhost:3000";

  const [imgUrl, setImgUrl] = useState(null); // S3 의 파일 url

  const [gender, setGender] = useState(0);

  const [title, setTitle] = useState("");

  const onChangeTitle = (event) => {
    const { value } = event.target;

    setTitle(value);
  };

  // 이미지 미리보기!!
  const onChangeImg = async (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    //이미지파일을 url로 변환?
    console.log(imageUrl);
    setFileUrl(imageUrl);

    const formData = new FormData();
    formData.append("img", imageFile); //postman에서 key값을 img

    const response = await axios({
      method: "POST",
      url: `${baseURL}/membership/images`,
      header: { "Content-type": "multipart/form-data" },
      data: formData, //formdata 형식은 위에처럼 formData를 설정해서 받아와야함
    });

    if (response.status === 200) {
      const result = response.data;
      const imgUrl = result.imgUrl;
      setImgUrl(imgUrl);
      console.log(imgUrl);
    } else {
      console.log("업로드 실패");
    }
  };

  const onChangeGender = (event) => {
    const { value } = event.target;
    console.log(value);
    setGender(value);
  };

  const onSubmitMembership = async () => {
    const response = await axios({
      method: "POST",
      url: `${baseURL}/membership`,
      data: {
        img: imgUrl,
        title,
        gender,
      },
    });

    if (response.status === 200) {
      const result = response.data;
      console.log("업로드 완료");
      console.log(result);
      history.push("/");
    } else {
      console.log("업로드 실패");
    }
  };

  return (
    <UploadComponent
      onChangeImg={onChangeImg}
      fileUrl={fileUrl}
      gender={gender}
      onChangeGender={onChangeGender}
      title={title}
      onChangeTitle={onChangeTitle}
      onSubmitMembership={onSubmitMembership}
    />
  );
}

export default UploadContainer;
