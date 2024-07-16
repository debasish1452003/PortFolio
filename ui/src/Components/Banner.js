import { Container, Row, Col } from "react-bootstrap";

import "./Banner.css";
// import "animate.css";
import About from "./About";

export const Banner = () => {
  return (
    <>
      <div className="banner" id="home">
        <div id="header"></div>
        <div className="header-text">
          <p>Web Developer</p>
          <h1>
            Hi, I'm <span>Debasish Rana</span> <br />
            From NIT Rourkela
          </h1>
        </div>
      </div>
      <About />
    </>
  );
};
