import React from "react";
import "../style.css";

const RadioBoutton = props => {
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
        <span
          className={
            index === selectedItem
              ? "btnRadioSelectedText"
              : "btnRadioUnSelectedText"
          }
          index={index}
          selectedItem={selectedItem}
        >
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
export default RadioBoutton;
