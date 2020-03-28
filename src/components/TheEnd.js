import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./style.css";

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

const TheEnd = props => {
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
    <div className="theEndBody">
      <p>Votre numéro de dossier est le : </p>
      <p className="textBold">{`  ${devierNum}`}</p>
    </div>
  );
};
export default TheEnd;
