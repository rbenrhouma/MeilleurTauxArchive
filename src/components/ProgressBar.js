import React, { useState, useEffect, useRef } from "react";

const ProgressBar = props => {
  const { pourcentage } = props;
  const ref = useRef(null);

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    // console.log("width", width);
  }, [ref.current]);

  const progressWidth = ref.current ? ref.current.offsetWidth : 0;

  let position = (pourcentage * progressWidth) / 100;

  return (
    <>
      <div ref={ref} className="progress-bar">
        <div className="pourcent_bar" style={{ width: pourcentage + "%" }}>
          {position > 0 && (
            <span className="pourcent" style={{ left: position + "px" }}>
              {pourcentage}%
            </span>
          )}
        </div>
      </div>
    </>
  );
};
export default ProgressBar;
