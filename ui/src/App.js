import "./App.css";

import { Banner } from "./Components/Banner.js";
import { NavBar } from "./Components/NavBar.js";
import Projects from "./Components/Projects.js";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Banner />
        <Projects />
      </>
    </div>
  );
}

export default App;
