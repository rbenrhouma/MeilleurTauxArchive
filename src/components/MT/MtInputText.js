import React from "react";
import ReactTooltip from "react-tooltip";

const MtInputText = props => {
  return (
    <div>
      <Input type="text"></Input>
      <div>
        <p ref={ref => (this.fooRef = ref)} data-tip="tooltip">
          ?
        </p>
        <button
          onClick={() => {
            ReactTooltip.hide(this.fooRef);
          }}
        ></button>
        <ReactTooltip />
      </div>
    </div>
  );
};
export default MtInputText;
