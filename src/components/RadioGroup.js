import React from "react";
import "./style.css";
import { RadioGroup, RadioButton } from "react-radio-buttons";

const RadioGroupX = props => {
  const setGender = event => {
    // console.log(event.target.value);
    // alert(event.target.value);
  };
  return (
    // <div onChange={setGender}>
    //   <input className="radioButton" type="radio" value="M" name="type_bien" />
    //   MAISON
    //   <input className="radioButton" type="radio" value="A" name="type_bien" />
    //   APPARTEMENY
    // </div>
    <>
      <RadioGroup onChange={setGender} horizontal>
        <RadioButton backgroudColor="black" disabledColor = "blue" pointColor="red" rootColor="blue" value="M">
          MAISON
        </RadioButton>
        <RadioButton value="A">APPARTEMENT</RadioButton>
        {/* <RadioButton value="melon">Melon</RadioButton> */}
        {/* <ReversedRadioButton value="melon">Melon</ReversedRadioButton> */}
      </RadioGroup>
    </>
  );
};
export default RadioGroupX;
