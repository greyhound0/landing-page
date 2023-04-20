import React from "react";

function FeatureBox({ image }) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={image} />
      </div>
      <div className="s-b-text">
        <h2>{}</h2>
      </div>
    </div>
  );
}

export default FeatureBox;
