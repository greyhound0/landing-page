import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "./images/download.png";
import Presentation from "./components/Presetation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <About
        image={aboutimage}
        title="Comes with all your need for daily life"
        button="Get The App"
      />
      <Presentation />
      <About
        image={aboutimage1}
        title="Download and get the App"
        button="Download"
      />
      <Contact />
    </div>
  );
}

export default App;
