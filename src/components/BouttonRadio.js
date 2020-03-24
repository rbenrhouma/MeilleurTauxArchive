import React from "react";
import "./style.css";

const BouttonRadio = props => {
  const { index, selectedItem, onSelect } = props;

  return (
    <>
      <div
        onClick={onSelect}
        className={
          index === selectedItem
            ? "btnRadio btnRadioSelected"
            : "btnRadio btnRadioUnselected"
        }
      >
        <span index={index} selectedItem={selectedItem}>
          <input
            className="radioBtn"
            type="radio"
            checked={index === selectedItem}
          />

          {props.caption}
        </span>
      </div>
    </>
  );
};
export default BouttonRadio;
