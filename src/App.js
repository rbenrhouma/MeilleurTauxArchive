import React, { useState, useEffect } from "react";
import Header from "./components/Head";
import Cookies from "universal-cookie";
import Body from "./components/Body";
import Footer from "./components/Footer";
import MentionsLegales from "./components/MentionsLegales";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
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

  const [typeBien, setTypeBien] = useState(0);
  const [etatBien, setEtatBien] = useState(0);
  const [usageBien, setUsageBien] = useState(0);
  const [situationUser, setSituationUser] = useState(0);
  const [pays, setPays] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [montantAquisition, setMontantAquisition] = useState(0);
  const [montantTravaux, setMontantTravaux] = useState(0);
  const [fraisNotaire, setFraisNotaire] = useState(0);
  const [budgetTotal, setBudgetTotal] = useState(0);
  const [email, setEmail] = useState(0);
  const [numDossier, setNumDossier] = useState(0);

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
    numDossier: ""
  };

  const initilizeCookies = () => {
    initialStore.pageIndex = 1;
  };

  const updateDevis = () => {
    _devis.typeBien = typeBien;
    _devis.etatBien = etatBien;
    _devis.usageBien = usageBien;
    _devis.situationUser = situationUser;
    _devis.pays = pays;
    _devis.codePostal = codePostal;
    _devis.montantAquisition = montantAquisition;
    _devis.montantTravaux = montantTravaux;
    _devis.fraisNotaire = fraisNotaire;
    _devis.budgetTotal = budgetTotal;
    _devis.email = email;
    _devis.numDossier = numDossier;
  };
  const saveDevis = () => {};

  useEffect(() => {
    setProgression(indexPage * 13);
    if (indexPage < 8) {
      initialStore.pageIndex = indexPage;
      updateDevis();
    } else {
      initilizeCookies();
      saveDevis();
    }
    cookies.set("myState", initialStore, { path: "/" });
    cookies.set("devis", _devis, { path: "/" });
  }, [indexPage, devis]);

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

  // return (
  //   <Router>
  //     <div>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/typebien">Type de bien</Link>
  //           </li>

  //           <li>
  //             <Link to="/etatbien">Etat de bien</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //       <Switch>
  //         <Route path="/typebien">
  //           <screenTypeBien />
  //         </Route>

  //         <Route path="/etatbien">
  //           <screenEtatBien />
  //         </Route>

  //         <Route path="/">
  //           <screenTypeBien />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // );
}

function screenTypeBien() {
  return <h2>01-screenTypeBien</h2>;
}
function screenEtatBien() {
  return <h2>02-screenEtatBien</h2>;
}
function screenUsageBien() {
  return <h2>03-screenUsageBien</h2>;
}
function screenSituationUser() {
  return <h2>04-screenSituationUser</h2>;
}
function screenLocalisationBien() {
  return <h2>05-LocalisationBien</h2>;
}
function screenBudgetBien() {
  return <h2>06-screenBudgetBien</h2>;
}
function screenCoordonneesUser() {
  return <h2>07-screenCoordonneesUser</h2>;
}
function screenFin() {
  return <h2>08-screenFin</h2>;
}
function screenBackOffice() {
  return <h2>99-screenBackOffice</h2>;
}
