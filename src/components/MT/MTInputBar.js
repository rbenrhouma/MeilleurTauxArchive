import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./MtComponentsStyles.css";

const MTInputBar = props => {
  const { name, caption, odd, txtInfo, handleChange, value, type } = props;

  return (
    <div className={odd === true ? "mtInputBar mtInputBarOdd" : "mtInputBar"}>
      <div className="mtCaption">{caption}</div>
      <div
        className={
          txtInfo && txtInfo != ""
            ? "mtInfo  fa fa-info"
            : "mtInfo hideElement fa fa-info"
        }
      ></div>
      <input
        className={type === "number" ? "mtInput right" : "mtInput"}
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
      {type === "number" && <div className="mtCurrency">€</div>}
    </div>
  );
};
export default MTInputBar;
