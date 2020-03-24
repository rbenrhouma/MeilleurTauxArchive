import React from "react";
import CountrySelect from "./CountrySelect";
import PostalCode from "./PostalCode";
import "./style.css";

import "./style.css";

const GoodLocalisation = props => {
  let value = "";
  return (
    <div className="goodLocalisation">
      <CountrySelect></CountrySelect>
      <PostalCode></PostalCode>
    </div>
  );
};
export default GoodLocalisation;
