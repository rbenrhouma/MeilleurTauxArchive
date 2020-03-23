import React from "react";
import NumericInput from "react-numeric-input";

import "./style.css";

const GoodCost = props => {
  return (
    <div className="goodCost">
      <p>Good cost</p>
      <NumericInput min={0} max={100} value={50} />
    </div>
  );
};
export default GoodCost;
