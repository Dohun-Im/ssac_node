# ssac_react

# React 로컬 개발

## 소프트웨어 & 라이브러리 설치

-   node.js 설치 / 버전 확인
-   npm(node package manager) / 버전 확인
-   yarn 설치 / 버전 확인

### unix/dos 명령어

-   clear / cls
-   ls, ls -l / dir
-   cd [문서 경로]
-   pwd (현재 위치 경로) / cd
-   mkdir / md, mkdir

### Visual Studio Code

-   설치

### React 프로젝트 설치

-   npx create-react-app [폴더이름]
-   폴더 이름 : . - 현재 폴더

## React

-   node module : node.js 에서 사용하는 module folder
-   public : 실제 브라우저에 표시되는 리소스들이 저장되는 폴더
-   src : html 파일에 반영되는(렌더링) 콘텐츠, 기능이 구현되어 있는 파일들이 저장되어 있는 폴더
-   index.html <= index.js <= App.js(Component)

## React 문서

-   공식 문서 : https://ko.reactjs.org

### localhost URL

-   로컬 서버에서 실행을 할때 사용할 수 있는 키워드
-   localhost => IP 주소 : 127.0.0.1
-   port - URL:port번호
    -   하나의 물리 서버에서 여러개의 서버 SW를 실행할 수 있음

## React의 특징

-   Virtual DOM
-   SPA (Single Page Application)
-   component : 작은 단위로 나누어준 코드 블럭(단위, 조각)

### JSX(Javascript Syntax Extension / Javascript XML)

-   HTML 마크업 언어를 별다른 기호 없이 그대로 javascript 구문처럼 사용할 수 있는 것
-   Babel.js 라이브러리가 JSX를 사용가능하게 해줌
-   JSX는 return 키워드 ()안에 하나의 Element 영역으로 그룹화 되어 있어야 함
-   하나의 영역으로 그룹화 할 때 특정 Element로 그룹화 해서 반영하지 않을 때 - Fragment 사용
-   JSX에서 자바스크립트 변수 값 사용하기
    -   {변수 이름}
-   JSX에서 class, id 지정하기
    -   class : className 속성을 사용
    -   id : id 속성 사용
-   JSX 주석 : {/_ 주석내용 _/}

### 구조 분해 할당

### Todo markup

https://dev.to/hariramjp777/todo-app-using-html-css-and-js-local-storage-design-html-and-css-1m0j

### TODO Component

-   header
-   main
    -   todo-list
        -   todo-item
    -   status
-   footer

### React에서 css를 작성/사용하는 방식

-   App.css에 전체 css를 구성하고 전역으로 사용하는 방식
-   module css 방식 : css를 하나로 구성하지 않고 component 별로 구성
    -   component와 css 파일이 분리되어 있음
    -   작성 방법
        -   폰트 설정, reset css 등은 App.css에 전역으로 사용
        -   하나의 요소를 선택해서 css를 적용한 경우 module css로 활용함
-   styled-component : 스타일링 된 컴포넌트 => component 별로 css를 구성
    -   inline 방식처럼 사용 => component 파일에 css, component contents 같이 작성
    -   Internal 방식으로 렌더링 됨

## React JSX에 기능 추가

-   이벤트와 함수를 연결할 때는

```
on이벤트={함수이름}

Ex) onClick={myfunction}
```

-   JSX에 반영되는 값이 업데이트 되어 다시 렌더링 되어야 할 때 Hook을 사용함

### React Hook

-   Hook은 함수 컴포넌트에서 리액트의 상태와 생명주기 기능을 연동할 수 있도록 하는 함수

-   useState

    -   초기값으로 지정한 값을 사용해서 상태를 표현하는 값과 그 값을 설정(지정)하는 함수를 반환함

-   useRef

    -   useRef로 할당된 객체와 해당 객체가 할당된 Element와 연결되어 Rendering된 DOM에 직접 Access 할 수 있도록 하는 함수

-   map 함수
    -   특정 데이터를 다른 형태나 성질의 데이터로 변형하여 매핑해주는 함수

### Hook을 사용해서 배열에 데이터를 추가/삭제

-   기본 배열 데이터

    -   최종으로 수정되는 데이터이기 때문에 기본 배열 데이터도 useState()로 상태 관리가 필요함

-   새로 입력되는 객체

    -   새로 값이 입력될 때 useState()로 상태 관리가 필요함
    -   구조 분해 할당을 통해 단순한 형태의 변수를 사용

-   실행 사이클의 상태 관리

    -   기본데이터 개수 이후로 데이터가 추가될 수 있도록 useRef()로 상태 관리가 필요함

-   컴포넌트 밖의 함수와 값을 사용하기 위해 컴포넌트 속으로 전달해서 사용하기도 함

-   전개 연산자 : ...
