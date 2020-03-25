import React, { useState, useEffect } from "react";
import Header from "./components/Head";
import Cookies from "universal-cookie";
import Body from "./components/Body";
import Footer from "./components/Footer";
import MentionsLegales from "./components/MentionsLegales";
import "./App.css";

function App() {
  let cookies = new Cookies();
  const [indexPage, setIndexPage] = useState(
    cookies.get("myState") ? cookies.get("myState").pageIndex : 1
  );
  const [progression, setProgression] = useState(0);
  const [currentFormIsValid, setCurrentFormIsValid] = useState(true);
  const [devis, setDevis] = useState(cookies.get("devis"));

  let initialStore = {
    pageIndex: 1
  };

  let _devis = {
    typeBien: 0, // 0: maison, 1: Appartement
    etatBien: 0, // 0: Ancien, 1: Neuf
    usageBien: 0, // 0: Résience principal, 1: Résience secondaire, 2: Investissement locatif
    situationUser: 0, //0: Locataire, 1 propriétaire, 2: Bénificiaire d'un logement de fonction, 3: Hébergé à titre gatuit.
    pays: "FR",
    codePostal: "",
    montantAquisition: 0,
    montantTravaux: 0,
    fraisNotaire: 0,
    budgetTotal: 0,
    email: "",
    numDossier: 0
  };

  const initilizeCookies = () => {
    initialStore.pageIndex = 1;
  };

  useEffect(() => {
    setProgression(indexPage * 13);
    if (indexPage < 8) initialStore.pageIndex = indexPage;
    else initilizeCookies();
    cookies.set("myState", initialStore, { path: "/" });
  }, [indexPage]);

  const nextPage = () => {
    if (currentFormIsValid) setIndexPage(indexPage + 1);
  };
  const priorPage = () => {
    setIndexPage(indexPage - 1);
    setCurrentFormIsValid(true);
  };

  const checkFormValide = valid => {
    setCurrentFormIsValid(valid);
  };

  return (
    <div className="App">
      <Header pageIndex={indexPage}></Header>
      <Body
        pageIndex={indexPage}
        checkFormValide={checkFormValide}
        devis={_devis}
      />
      <Footer
        pageInex={indexPage}
        progression={progression}
        onPriorPage={priorPage}
        onNextPage={nextPage}
        currentFormIsValid={currentFormIsValid}
      ></Footer>
      <MentionsLegales pageInex={indexPage} />
    </div>
  );
}

export default App;
