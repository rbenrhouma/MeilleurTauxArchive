import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MTInput from "./MTInput";

import "./MtComponentsStyles.css";

const MTInputBar = props => {
  const {
    name,
    caption,
    odd,
    txtInfo,
    handleChange,
    value,
    type,
    icone,
    diasabled
  } = props;

  console.log(icone);

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

      <MTInput
        name={name}
        handleChange={handleChange}
        value={value}
        type={type}
        diasabled={diasabled ? diasabled : null}
      />
      {icone && <img className="mtInputIcone" src={icone} alt={"Conf"} />}
      {type === "number" && <div className="mtCurrency">€</div>}
    </div>
  );
};
export default MTInputBar;
