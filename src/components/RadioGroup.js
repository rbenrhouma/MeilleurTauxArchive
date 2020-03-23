import React, { useState, useEffect } from "react";
import "./style.css";
import BouttonRadio from "./BouttonRadio";

const RadioGroup = props => {
  const { InterfaceData } = props;
  const [selectedItem, setSelectedItem] = useState(0);

  const onSelectItem = e => {
    const idx = e.target.getAttribute("index") * 1;
    setSelectedItem(idx);
  };

  useEffect(() => {}, [selectedItem]);

  return (
    <>
      <div className="radioGroup">
        {InterfaceData &&
          InterfaceData.map((radioBtn, index) => {
            return (
              index > 0 && (
                <BouttonRadio
                  key={index}
                  index={index}
                  selectedItem={selectedItem}
                  caption={radioBtn.caption}
                  onSelect={onSelectItem}
                ></BouttonRadio>
              )
            );
          })}
      </div>
    </>
  );
};
export default RadioGroup;
