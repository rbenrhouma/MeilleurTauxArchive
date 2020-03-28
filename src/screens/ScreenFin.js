import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";
import PagesPaths from "../constantes/PagesPaths";
import DataPages from "../constantes/InterfaceData";
import Title from "../components/Title";

import Cookies from "js-cookie";

// devis.typeBien
// devis.etatBien
// devis.usageBien
// devis.situationUser
// devis.country
// devis.zipCode
// devis.montant
// devis.travaux
// devis.notaire
// devis.total
// devis.email

const ScreenFin = props => {
    console.log("ici_FIN");

  const { pageIndex } = props;
  const data = DataPages[pageIndex - 1];

  const { devis, setDevis } = props.context;
  const [devierNum, setDevierNum] = useState("");
  const serverURL = "https://localhost:5000/";
  //const serverURL = "https://meilleurtauxapi.herokuapp.com/";

  Cookies.remove("devis");
  Cookies.remove("route");
  Cookies.remove("page");

  const saveData = async () => {
    if (
      devis.typeBien &&
      devis.usageBien &&
      devis.email &&
      devis.total !== undefined
    ) {
      try {
        const response = await axios.post(serverURL + "devis/save", {
          goodType: devis.typeBien,
          usageBien: devis.usageBien,
          email: devis.email,
          total: devis.total
        });
        setDevierNum(response.data.numDevis);

        Cookies.remove("devis");
        Cookies.remove("route");
        Cookies.remove("page");
        setDevis({});
      } catch (err) {
        alert(err.message);
        console.log(err);
      }
    } else {
      alert("erreur");
    }
  };

  useEffect(() => {
    saveData();
  }, []);
  return (
    <>
      <Header context={props} />
      {data && (
        <Title title={`${data[0].title}  `} txtInfo={`${data[0].info}`}></Title>
      )}
      <div className="body" id="body_form">
        <div className="theEndBody">
          <p>Votre numéro de dossier est le : </p>
          <p className="textBold">{`  ${devierNum}`}</p>
        </div>
      </div>
      <Footer context={props} />
    </>
  );
};
export default ScreenFin;
