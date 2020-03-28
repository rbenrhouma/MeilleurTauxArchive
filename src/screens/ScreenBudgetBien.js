import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DataPages from "../constantes/InterfaceData";
import Title from "../components/Title";
import RadioGroup from "../components/MT/RadioGroup";
import MTInputBar from "../components/MT/MTInputBar";

const Fmontant = "montant";
const Ftravaux = "travaux";
const Fnotaire = "notaire";
const Ftotal = "total";

const ScreenBudgetBien = props => {
  const { pageIndex } = props;
  const data = DataPages[pageIndex - 1];

  const { devis, setDevis } = props.context;
  const [montant, setMontant] = useState(0);
  const [travaux, setTravaux] = useState(0);
  const [notaire, setNotaire] = useState(0);
  const [total, setTotal] = useState(0);
  const newGood = devis.etatBien === 2;

  const formatedNumber = num => {
    return num;
  };

  useEffect(() => {
    if (newGood) setNotaire(formatedNumber((montant * 0.018).toFixed(0)));
    else setNotaire(formatedNumber((montant * 0.0738).toFixed(0)));
    setTotal(formatedNumber(montant * 1 + travaux * 1 + notaire * 1));

    setDevis({ ...devis, [Fmontant]: montant });
    setDevis({ ...devis, [Ftravaux]: travaux });
    setDevis({ ...devis, [Fnotaire]: notaire });
    setDevis({ ...devis, [Ftotal]: total });
  }, [montant]);

  useEffect(() => {
    setTotal(formatedNumber(montant * 1 + travaux * 1 + notaire * 1));
    setDevis({ ...devis, [Fmontant]: montant });
    setDevis({ ...devis, [Ftravaux]: travaux });
    setDevis({ ...devis, [Fnotaire]: notaire });
    setDevis({ ...devis, [Ftotal]: total });
  }, [travaux, notaire]);

  function handleChange(e) {
    if (e.target.name === Fmontant) setMontant(e.target.value);
    else if (e.target.name === Ftravaux) setTravaux(e.target.value);
    else if (e.target.name === Fnotaire) setNotaire(e.target.value);
  }

  return (
    <>
      <Header context={props} />
      {data && (
        <Title title={`${data[0].title}  `} txtInfo={`${data[0].info}`}></Title>
      )}
      <div className="body" id="body_form">
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
      </div>
      <Footer context={props} />
    </>
  );
};
export default ScreenBudgetBien;
