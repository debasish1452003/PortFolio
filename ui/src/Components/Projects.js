import React from "react";
import "./Projects.css";

const Projects = () => {
  const data = [
    {
      id: "1",
      name: "AmazeKart",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at minima recusandae optio dolores nostrum hic, quod natus cupiditate neque atque sequi rerum nesciunt est et aliquam dolorem! Laboriosam, nulla?",
      image: "https://i.postimg.cc/nrtyFHqS/i-Phone-15.png",
    },
    {
      id: "2",
      name: "AmazeKart",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at minima recusandae optio dolores nostrum hic, quod natus cupiditate neque atque sequi rerum nesciunt est et aliquam dolorem! Laboriosam, nulla?",
      image: "https://i.postimg.cc/nrtyFHqS/i-Phone-15.png",
    },
    {
      id: "3",
      name: "AmazeKart",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at minima recusandae optio dolores nostrum hic, quod natus cupiditate neque atque sequi rerum nesciunt est et aliquam dolorem! Laboriosam, nulla?",
      image: "https://i.postimg.cc/nrtyFHqS/i-Phone-15.png",
    },
    {
      id: "4",
      name: "AmazeKart",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at minima recusandae optio dolores nostrum hic, quod natus cupiditate neque atque sequi rerum nesciunt est et aliquam dolorem! Laboriosam, nulla?",
      image: "https://i.postimg.cc/nrtyFHqS/i-Phone-15.png",
    },
    {
      id: "4",
      name: "AmazeKart",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at minima recusandae optio dolores nostrum hic, quod natus cupiditate neque atque sequi rerum nesciunt est et aliquam dolorem! Laboriosam, nulla?",
      image: "https://i.postimg.cc/nrtyFHqS/i-Phone-15.png",
    },
  ];
  return (
    <>
      <div id="portofolio">
        <div className="container">
          <h1 className="sub-title">My Projects</h1>
          <div className="work-list">
            {data.map(({ id, name, description, image }) => {
              return (
                <>
                  <div className="work" id={id}>
                    <img src={image} alt="" />
                    <div className="layer">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#"></a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
