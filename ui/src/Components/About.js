import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="dummy"></div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img
                src="https://i.postimg.cc/W3xW2XR4/IMG20230114163238.jpg"
                alt="about-photo"
              />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                id fugiat nemo aspernatur quo facere, velit libero? Quaerat
                corrupti dolor exercitationem ratione minima perspiciatis
                aperiam nostrum itaque error doloremque impedit voluptate eaque
                autem illo, eos atque harum magnam voluptatem pariatur iste
                natus! Quo quia magnam perferendis voluptatum, tempore
                aspernatur qui voluptatem doloribus ut quas esse eius deserunt
                laborum libero temporibus iste adipisci quae est, mollitia
                molestias modi. Nulla voluptatum ratione saepe eos ipsam
                perferendis, dicta dolor repudiandae, unde adipisci ab, eius
                pariatur consequuntur ipsa repellat minus excepturi quaerat
                nesciunt recusandae iure. Vitae error nisi aut necessitatibus
                illum rerum cupiditate quae?
              </p>
              <div className="tab-titles">
                <p className="tab-links active-link">Skills</p>
                <p className="tab-links">Experience</p>
                <p className="tab-links">Education</p>
              </div>
              <div className="tab-contents">
                <ul>
                  <li>
                    <span>UI/UX</span>
                    <br />
                    Designing Web/App interfaces
                  </li>
                  <li>
                    <span>Web Development</span>
                    <br />
                    Web app Development
                  </li>
                  <li>
                    <span>App Development</span>
                    <br />
                    Building Android/IOS Apps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
