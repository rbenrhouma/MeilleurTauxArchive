import React, { useState, useEffect } from "react";
import MtNumericInputBar from "./MT/MtNumericInputBar";

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

  useEffect(() => {
    setNotaire(montant * 1.8);
    setTotal(montant * 1 + travaux * 1 + notaire * 1);
  }, [montant, travaux]);
  function handleChange(e) {
    if (e.target.name === Fmontant) setMontant(e.target.value);
    else if (e.target.name === Ftravaux) setTravaux(e.target.value);
  }
  return (
    <div className="goodCost">
      <MtNumericInputBar
        name={Fmontant}
        handleChange={handleChange}
        value={montant}
        odd={true}
        caption={"Montant estimé de votre aquisition *"}
        txtInfo={"bla bla bla 11111111..."}
      />
      <MtNumericInputBar
        name={Ftravaux}
        handleChange={handleChange}
        value={travaux}
        odd={false}
        caption={"Montant estimé des travaux"}
        txtInfo={"bla bla bla 22222222..."}
      />
      <MtNumericInputBar
        name={Fnotaire}
        handleChange={handleChange}
        value={notaire}
        odd={true}
        caption={"Frais de notaire *"}
        txtInfo={"bla bla bla 3333333..."}
      />
      <MtNumericInputBar
        name={Ftotal}
        handleChange={handleChange}
        value={total}
        odd={false}
        caption={"Budjet total estimé du projet"}
        txtInfo={"bla bla bla 444444 ..."}
      />
    </div>
  );
};
export default GoodCost;
