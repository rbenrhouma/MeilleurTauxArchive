import React from "react";
import "./style.css";
import RadioGroupX from "./RadioGroup";

const Body = props => {
  const { pageIndex } = props;
  return (
    <>
      <div class="body" id="body_form">
        <div>{pageIndex}</div>
        <RadioGroupX />
      </div>
    </>
  );
};
export default Body;
