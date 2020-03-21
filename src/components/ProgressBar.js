import React, { useState } from "react";

const ProgressBar = props => {
  const { pourcentage } = props;
  return (
    <div class="progress-bar">
      <div id="pagiContent">
        <div id="pagiStep">
          {pourcentage}
          <span>%</span>
        </div>
        <div id="pagiAvancement"></div>
      </div>
    </div>
  );
};
export default ProgressBar;
