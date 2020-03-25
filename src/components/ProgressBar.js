import React from "react";

const ProgressBar = props => {
  const { pourcentage } = props;
  //let position = -425 + pourcentage * 8;
  let position = (pourcentage * 815) / 100;
  console.log(pourcentage);
  console.log(position);
  return (
    <>
      <div className="progress-bar">
        <div className="pourcent_bar" style={{ width: pourcentage + "%" }}>
          <span className="pourcent" style={{ left: position + "px" }}>
            {pourcentage}%
          </span>
        </div>
      </div>
    </>
  );
};
export default ProgressBar;
