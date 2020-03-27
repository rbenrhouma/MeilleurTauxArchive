import React, { useState, useEffect } from "react";
import MTInputBar from "./MT/MTInputBar";

import "./style.css";

const Fmontant = "montant";
const Ftravaux = "travaux";
const Fnotaire = "notaire";
const Ftotal = "total";

const GoodCost = props => {
  const [montant, setMontant] = useState(0);
  const [travaux, setTravaux] = useState(0);
  const [notaire, setNotaire] = useState(0);
  const [total, setTotal] = useState(0);

  const formatedNumber = num => {
    return num;
  };

  useEffect(() => {
    setNotaire(formatedNumber((montant * 0.18).toFixed(0)));
    setTotal(formatedNumber(montant * 1 + travaux * 1 + notaire * 1));
  }, [montant, travaux]);

  function handleChange(e) {
    if (e.target.name === Fmontant) setMontant(e.target.value);
    else if (e.target.name === Ftravaux) setTravaux(e.target.value);
  }

  return (
    <div className="goodCost">
      <MTInputBar
        name={Fmontant}
        handleChange={handleChange}
        value={montant}
        type={"number"}
        odd={true}
        caption={"Montant estimé de votre aquisition *"}
        txtInfo={"bla bla bla 11111111..."}
      />
      <MTInputBar
        name={Ftravaux}
        handleChange={handleChange}
        value={travaux}
        type={"number"}
        odd={false}
        caption={"Montant estimé des travaux"}
        txtInfo={"bla bla bla 22222222..."}
      />
      <MTInputBar
        name={Fnotaire}
        handleChange={handleChange}
        value={notaire}
        type={"number"}
        odd={true}
        caption={"Frais de notaire *"}
        txtInfo={"bla bla bla 3333333..."}
      />
      <MTInputBar
        name={Ftotal}
        handleChange={handleChange}
        value={total}
        type={"number"}
        odd={false}
        caption={"Budjet total estimé du projet"}
        txtInfo={"bla bla bla 444444 ..."}
        diasabled
      />
    </div>
  );
};
export default GoodCost;
