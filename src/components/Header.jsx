import React from "react";
import Navbar from "./Navbar";
import website_creation from "../images/website-creation.pdf";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch Your App</span> With Creativity
        </h1>
        <p className="details">
          Launching a new app can be an exciting and daunting experience. While
          there are countless apps available on app stores, only a few of them
          manage to catch the user's attention and become successful. If you
          want to make sure that your app is not lost in the sea of apps, you
          need to launch it with creativity.
        </p>
        <a
          href="https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
          className="cv-btn"
          download
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Header;
