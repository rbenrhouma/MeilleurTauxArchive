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

  let initialStore = {
    pageIndex: 1
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
      <Header></Header>

      <Body pageIndex={indexPage} checkFormValide={checkFormValide} />
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
