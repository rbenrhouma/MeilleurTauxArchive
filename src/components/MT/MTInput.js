import React from "react";
import "./MtComponentsStyles.css";

const MTInput = props => {
  const {
    name,
    handleChange,
    value,
    type,
    diasabled
  } = props;
  return (
    <>
      <input
        className={
          (diasabled ? " mtInputDisabled " : "mtInput ") +
          (type === "number" ? " right " : " mtInput ")
        }
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};
export default MTInput;
