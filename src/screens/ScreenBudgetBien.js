import React  from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";

import DataPages from "../constantes/InterfaceData";
import Title from "../components/Title";
import RadioGroup from "../components/MT/RadioGroup";

import GoodLocalisation from "../components/GoodLocalisation";
import GoodCost from "../components/GoodCost";

const ScreenBudgetBien = props => {
  const { pageIndex} = props;
  const data = DataPages[pageIndex - 1];

  return (
    <>
      <Header context={props} />
      {data && (
        <Title title={`${data[0].title}  `} txtInfo={`${data[0].info}`}></Title>
      )}
      <div className="body" id="body_form">
        <GoodCost context={props} />
      </div>
      <Footer context={props} />
    </>
  );
};
export default ScreenBudgetBien;
