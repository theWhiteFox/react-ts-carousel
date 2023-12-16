import reactLogo from "../assets/react.svg";

import { Footer } from "./Styles"
 
function App() {
  return (
    <>
      <Footer>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Footer>
    </>
  );
}

export default App;
