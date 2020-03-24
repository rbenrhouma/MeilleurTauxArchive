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

  let initialStore = {
    pageIndex: -1
  };

  const initilizeCookies = () => {
    initialStore.pageIndex = -1;
  };

  useEffect(() => {
    setProgression(indexPage * 13);
    if (indexPage < 8) initialStore.pageIndex = indexPage;
    else initilizeCookies();
    cookies.set("myState", initialStore, { path: "/" });
    //console.log(cookies.get("myState"));
  }, [indexPage]);

  const nextPage = () => {
    setIndexPage(indexPage + 1);
  };
  const priorPage = () => {
    setIndexPage(indexPage - 1);
  };

  //cookies.set("myState", initialStore, { path: "/" });
  //console.log(cookies.get("myState"));

  return (
    <div className="App">
      <Header></Header>

      <Body pageIndex={indexPage} />
      <Footer
        pageInex={indexPage}
        progression={progression}
        onPriorPage={priorPage}
        onNextPage={nextPage}
      ></Footer>
      <MentionsLegales></MentionsLegales>
    </div>
  );
}

export default App;
