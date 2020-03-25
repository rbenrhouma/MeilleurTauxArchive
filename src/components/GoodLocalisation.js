import React, { useState } from "react";
import MTInputBar from "./MT/MTInputBar";
import "./style.css";

import "./style.css";

const GoodLocalisation = props => {
  const [country, setCountry] = useState("FR");
  const [postalCode, setPostalCode] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div className="">
      <MTInputBar
        name={"coutry"}
        handleChange={handleChange}
        value={country}
        type={"text"}
        odd={true}
        caption={"Dans quel pzys se situe votre projet ? *"}
        txtInfo={"bla bla bla 11111111..."}
      />
      <MTInputBar
        name={"postalCode"}
        handleChange={handleChange}
        value={postalCode}
        type={"text"}
        odd={true}
        caption={"Ville ou code postal *"}
        txtInfo={"bla bla bla 11111111..."}
      />
      <div style={{ paddingLeft: 50 }}>
        <h4>
          La connaissance de code postal du bien permettra de calculer les frais
          de notaire selon les conditions en vigueur dans le département
          concerné.
        </h4>
        <h4>
          Si vous êtes en recherche de bien sur plusieurs communes, indiquez une
          commune ciblée.
        </h4>
      </div>
    </div>
  );
};
export default GoodLocalisation;
