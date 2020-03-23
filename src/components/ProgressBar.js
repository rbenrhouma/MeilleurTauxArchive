import React from "react";

const ProgressBar = props => {
  const { pourcentage } = props;
  let position = -425 + pourcentage * 8;

  return (
    <>
      <div className="progress-bar">
        <div
          className="pourcent_bar"
          style={{ width: pourcentage + "%" }}
        ></div>
        <span className="pourcent" style={{ left: position + "px" }}>
          {pourcentage}%
        </span>
      </div>
    </>
  );
};
export default ProgressBar;
