import { Route } from "react-router";
import NavbarComponent from "./components/common/NavbarComponent";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

// /
// /upload
// exact={true} 하면 /인 주소일때만.
function App() {
  return (
    <>
      <NavbarComponent />
      <Route path="/" exact={true} component={Home} />
      <Route path="/upload" component={Upload} />
    </>
  );
}

export default App;
