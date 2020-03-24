import React from "react";
import CountrySelect from "./CountrySelect";
import PostalCode from "./PostalCode";
import MTAutocomplete from "./MT/MTAutocomplete";
import "./style.css";

import "./style.css";

const GoodLocalisation = props => {
  let value = "";
  return (
    <div className="goodLocalisation">
      <CountrySelect></CountrySelect>
      <PostalCode></PostalCode>

      <MTAutocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}
      />
    </div>
  );
};
export default GoodLocalisation;
