import React from "react";
import CountrySelect from "./CountrySelect";
import PostalCode from "./PostalCode";
import MTAutocomplete from "./MT/MTAutocomplete";
import countriesList from "../constantes/CountryData";
import "./style.css";

import "./style.css";

const GoodLocalisation = props => {
  let value = "";
  return (
    <div className="goodLocalisation">
      <CountrySelect></CountrySelect>
      <PostalCode></PostalCode>

      <MTAutocomplete
        suggestions={countriesList.map(
          option => option.label + " ( " + option.code + " )"
        )}
      />
    </div>
  );
};
export default GoodLocalisation;
