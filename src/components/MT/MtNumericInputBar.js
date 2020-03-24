import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./MtComponentsStyles.css";

const MtNumericInputBar = props => {
  const { name, caption, odd, txtInfo, handleChange, value } = props;

  return (
    <div
      className={
        odd === true ? "numericInputBar numericInputBarOdd" : "numericInputBar"
      }
    >
      <div className="numericCaption">{caption}</div>
      <div
        className={
          txtInfo && txtInfo != ""
            ? "numericInfo  fa fa-info"
            : "numericInfo hideElement fa fa-info"
        }
      ></div>
      <input
        className="NumericInput right"
        type="number"
        name={name}
        onChange={handleChange}
        value={value}
      />
      <div className="numericCurrency">€</div>
    </div>
  );
};
export default MtNumericInputBar;
