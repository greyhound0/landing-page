import React from "react";
import FeatureBox from "./FeatureBox";
import feautureimage from "../images/feature_1.png";
import feautureimage1 from "../images/feature_2.png";
import feautureimage2 from "../images/feature_3.png";

function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={feautureimage} title="Development Course" />
        <FeatureBox image={feautureimage1} title="Money Saving Services" />
        <FeatureBox image={feautureimage2} title="Usability Interface" />
      </div>
    </div>
  );
}

export default Feature;
