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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          magnam itaque nobis quasi vero iusto quam quo. Sapiente excepturi,
          nisi blanditiis dolorem dicta, itaque ullam esse, facilis pariatur
          magnam accusamus.
        </p>
        <a href="#" className="cv-btn" download={website_creation}>
          Download
        </a>
      </div>
    </div>
  );
}

export default Header;
