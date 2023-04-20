import React from "react";

function About({ image, button }) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={image} alt="" />
      </div>
      <div className="about-text">
        <h2>{}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          repudiandae fuga laboriosam labore deserunt
        </p>
        <button>{button}</button>
      </div>
    </div>
  );
}

export default About;
