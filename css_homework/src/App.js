import GlobalStyles from "./GlobalStyles";
import NavbarContainer from "./containers/common/NavbarContainer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavbarContainer />
      <Route component={Home} />
    </>
  );
}

export default App;
