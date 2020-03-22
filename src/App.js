import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Head";

import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [indexPage, setIndexPage] = useState(1);
  const [progression, setProgression] = useState(0);

  useEffect(() => {
    switch (indexPage) {
      case 1:
        setProgression(5);
        break;
      case 2:
        setProgression(8);
        break;
      case 3:
        setProgression(11);
        break;
      case 4:
        setProgression(16);
        break;
      case 5:
        setProgression(26);
        break;
      case 6:
        setProgression(29);
        break;
      case 7:
        setProgression(93);
        break;
      default:
        setProgression(5);
    }
  }, [indexPage]);

  const nextPage = () => {
    setIndexPage(indexPage + 1);
  };
  const priorPage = () => {
    setIndexPage(indexPage - 1);
  };

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
