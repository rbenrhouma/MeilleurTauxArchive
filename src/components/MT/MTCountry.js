import React from "react";
import countriesList from "../../constantes/CountryData";

export default function MTCountry(props) {
  const { name, handleChange, value, type, diasabled } = props;

  return (
    <div>
      <select
        className={
          (diasabled ? " mtInputDisabled " : "mtInput ") +
          (type === "number" ? " right " : " mtInput ")
        }
        name="pets"
        id="pet-select"
      >
        <option value="">Pays</option>
        {countriesList.map(option => (
          <option value={option.code} selected={option.selected}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
