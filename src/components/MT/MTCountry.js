import React from "react";
import countriesList from "../../constantes/CountryData";

export default function MTCountry(props) {
  const { name, handleChange, value, type, diasabled } = props;

  return (
    <div>
      <select
        className={diasabled ? " mtInputDisabled " : "mtInput "}
        style={{ width: 400, height: 64 }}
        name="pets"
        id="pet-select"
      >
        <option value="">Pays</option>
        {countriesList.map((option, index) => (
          <option value={option.code} selected={option.selected}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
