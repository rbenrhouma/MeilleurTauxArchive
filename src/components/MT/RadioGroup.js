import React, { useState, useEffect } from "react";
import RadioBoutton from "./RadioBoutton";

import "../style.css";

const RadioGroup = props => {
  const { InterfaceData } = props;
  const { setDevis, devis } = props.context.context;
  const [selectedItem, setSelectedItem] = useState(0);

  const onSelectItem = e => {
    const idx = e.target.getAttribute("index") * 1;
    setSelectedItem(idx);
    setDevis({ ...devis, [props.InterfaceData[0].field]: idx });
    console.log("----------------- devis --------------------");
    console.log(devis);
  };

  useEffect(() => {}, [selectedItem]);

  return (
    <>
      <div className="radioGroup">
        {InterfaceData &&
          InterfaceData.map((radioBtn, index) => {
            return (
              index > 0 && (
                <RadioBoutton
                  key={index}
                  index={index}
                  selectedItem={selectedItem}
                  caption={radioBtn.caption}
                  onSelect={onSelectItem}
                ></RadioBoutton>
              )
            );
          })}
      </div>
    </>
  );
};
export default RadioGroup;
