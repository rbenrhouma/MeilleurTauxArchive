import React, { useState, useEffect } from "react";
import Header from "./components/Head";
import Cookies from "universal-cookie";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [indexPage, setIndexPage] = useState(1);
  const [progression, setProgression] = useState(0);

  let initialStore = {
    page1: 0,
    page2: 0
  };

  useEffect(() => {
    setProgression(indexPage * 12);
  }, [indexPage]);

  const nextPage = () => {
    setIndexPage(indexPage + 1);
  };
  const priorPage = () => {
    setIndexPage(indexPage - 1);
  };

  const cookies = new Cookies();
  cookies.set("myState", initialStore, { path: "/" });
  console.log(cookies.get("myState"));

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
    </div>
  );
}

export default App;
