import React, { useState, useEffect } from "react";
import MTInputBar from "./MT/MTInputBar";
import "./style.css";

const GoodLocalisation = props => {
  console.log(props.context.context);
  const { context } = props.context;
  const [country, setCountry] = useState("FR");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {}, [country, postalCode]);

  const handleChange = e => {
    if (e.target) console.log(e.target);
  };
  return (
    <div className="">
      <MTInputBar
        name={"coutry"}
        handleChange={handleChange}
        context={props.context}
        value={country}
        type={"text"}
        type2={"country"}
        odd={true}
        caption={"Dans quel pzys se situe votre projet ? *"}
        txtInfo={"bla bla bla 11111111..."}
      />
      <MTInputBar
        name={"postalCode"}
        handleChange={handleChange}
        context={props.context}
        value={postalCode}
        type={"text"}
        type2={"postalCode"}
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
