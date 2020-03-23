import React from "react";
import NumericInput from "react-numeric-input";

import "./style.css";

const GoodLocalisation = props => {
  return (
    <div className="goodLocalisation">
      <input
        id="ville"
        placeholder="Entrez un code postal ou une ville"
        autocomplete="off"
        size="50"
      ></input>

      <ul>
        <li data-vicopo="#ville">
          <strong data-vicopo-code-postal></strong>
          <span data-vicopo-ville></span>
        </li>
      </ul>
    </div>
  );
};
export default GoodLocalisation;
