import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./style.css";

// devis.typeBien
// devis.etatBien
// devis.usageBien
// devis.situationUser
// devis.country
// devis.postalCode
// devis.montant
// devis.travaux
// devis.notaire
// devis.total
// devis.mail

const TheEnd = props => {
  const { devis, setDevis } = props.context.context;
  const [devierNum, setDevierNum] = useState("");
  //const serverURL ="http://localhost:3000/";
  const serverURL = "https://meilleurtauxapi.herokuapp.com/";
  const saveData = async () => {
    if (
      devis.goodType &&
      devis.goodCondition &&
      devis.goodUsage &&
      devis.userSituation &&
      devis.goodLocation &&
      devis.email &&
      devis.goodPrice !== undefined &&
      devis.buildingCosts !== undefined &&
      devis.charges !== undefined &&
      devis.total !== undefined
    ) {
      try {
        const response = await axios.post(serverURL + "devis/save", {
          goodType: devis.goodType,
          goodCondition: devis.goodCondition,
          goodUsage: devis.goodUsage,
          userSituation: devis.userSituation,
          city: devis.goodLocation,
          email: devis.email,
          goodPrice: devis.goodPrice,
          buildingCosts: devis.buildingCosts,
          charges: devis.charges,
          total: devis.total
        });
        setDevierNum(response.data.numDevis);

        Cookies.remove("devis");
        Cookies.remove("route");
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
    <div className="theEndBody">
      <p>Votre numéro de dossier est le : </p>
      <p className="textBold">{`  ${devierNum}`}</p>
    </div>
  );
};
export default TheEnd;
