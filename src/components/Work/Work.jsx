import React from "react";
 import WorkCardData from "../WorkCardData.js";
import WorkCard from "../WorkCard/WorkCard";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects.</h1>
      <div className="project-container">
        {WorkCardData.map((value, i) => {
          return (
            <WorkCard
              key={i}
              img={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
