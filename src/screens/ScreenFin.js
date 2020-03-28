import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import PagesPaths from "../constantes/PagesPaths";
import DataPages from "../constantes/InterfaceData";
import Title from "../components/Title";

import TheEnd from "../components/TheEnd";

const ScreenFin = props => {
  const { pageIndex, } = props;
  const data = DataPages[pageIndex - 1];

  console.log("--------------  ScreenFin ------------------");
  console.log(pageIndex);
  return (
    <>
      <Header context={props} />
      {data && (
        <Title title={`${data[0].title}  `} txtInfo={`${data[0].info}`}></Title>
      )}
      <div className="body" id="body_form">
        <TheEnd context={props} />
      </div>
      <Footer context={props} />
    </>
  );
};
export default ScreenFin;
