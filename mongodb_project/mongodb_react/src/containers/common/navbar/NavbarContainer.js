import React, { useState, useEffect } from "react";
import NavbarComponent from "../../../components/common/navbar/NavbarComponent";
import { useHistory } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:3000";

function NavbarContainer({ isLoggined, setIsLoggined }) {
  const history = useHistory();

  //검색 자동완성창이 검색할때만 뜨도록
  const [searchState, setSearchState] = useState(false);
  const [searchInfo, setSearchInfo] = useState({
    search: "",
  });

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (searchInfo.search.length > 0) {
      // 타이핑 하고있다면
      setSearchState(true);
    } else {
      //입력값 없다면
      setSearchState(false);
    }
  }, [searchInfo]);

  const onClickAutoComplete = (text) => {
    const originText = text[0].replace("<em>", "").replace("</em>", "");

    setSearchInfo({
      //매개변수(text)가 있는 함수의 경우 프롭스 받아서 쓸때 화살표함수 써야함!! component에서 확인해보자
      ...searchInfo,
      search: originText,
    });
  };

  const onChangeInput = async (event) => {
    //검색어 입력
    const { name, value } = event.target;
    // console.log(`${name}`);
    setSearchInfo({
      ...searchInfo,
      [name]: value,
    });
    //axios
    try {
      const result = await axios({
        url: `${baseURL}/ssac/search?q=${value}`,
        //?q=${value} 대신 쿼리작성가능
        //parmas: {
        //   q: value
        // }
        method: "GET",
      });
      console.log(result);
      if (result.status === 200) {
        const elsData = result.data.data;
        setSearchData(elsData);
        console.log(elsData);
      }
    } catch (error) {
      alert("서버에러");
    }
  };

  const onClickSearch = async () => {
    try {
      const result = await axios({
        url: `${baseURL}/ssac/search?q=${searchInfo.search}`,
        method: "GET",
      });
      if (result.status === 200) {
        const elsData = result.data.data;
        setSearchData(elsData);
        console.log(elsData);
      }
    } catch (error) {
      alert("서버에러");
    }
  };

  const onClickSignout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggined(false);
    history.push("/");
  };

  return (
    <NavbarComponent
      searchData={searchData}
      searchState={searchState}
      isLoggined={isLoggined}
      onClickSignout={onClickSignout}
      onChangeInput={onChangeInput}
      searchInfo={searchInfo}
      onClickSearch={onClickSearch}
      onClickAutoComplete={onClickAutoComplete}
    />
  );
}

export default NavbarContainer;
