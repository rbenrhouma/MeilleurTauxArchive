import React from "react";

const ProgressBar = props => {
  const { pourcentage } = props;
  let position = -425 + pourcentage * 8;
  return (
    <>
      <div className="progress-bar">
        <span className="pourcent" style={{ left: position + "px" }}>
          {pourcentage}%
        </span>
      </div>
    </>
  );
};
export default ProgressBar;
