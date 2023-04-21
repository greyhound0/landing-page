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
          Looking for a convenient and efficient way to stay connected with your
          friends and family? Look no further than our new mobile app! With just
          a few taps, you can easily chat, share photos and videos, and stay
          up-to-date with all the latest news and events. Our app is designed
          with simplicity in mind, so you can easily navigate and find what
          you're looking for. Plus, it's completely free to download and use, so
          you can stay connected without breaking the bank.
        </p>
        <button>{button}</button>
      </div>
    </div>
  );
}

export default About;
