import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  html {
    font-size: 10px;
    background: #f5f5f4;
  }
`;

export default GlobalStyles;
