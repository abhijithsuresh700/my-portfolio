import React from "react";
import "./aboutContent.css";
import { Link } from "react-router-dom";
import React1 from "../../assets/react1.jpg";
import React2 from "../../assets/react2.webp";
import Project14 from "../../assets/project14.png";
import Project13 from "../../assets/project13.png";

const AboutContent = () => {
  return (
    <div className="aboutl">
      <div className="aboutLeft">
        <h1 className="lefth1">Who Am I ?</h1>
        <p className="leftp">Im a full stack developer</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="aboutright">
        <div className="right-img-container">
          <div className="right-img-stack-top">
            <img src={Project14} className="rightimg" alt="image" />
          </div>
          <div className="right-img-stack-bottom">
            <img src={Project13} className="rightimg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
