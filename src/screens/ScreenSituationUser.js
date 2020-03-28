import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DataPages from "../constantes/InterfaceData";
import Title from "../components/Title";
import RadioGroup from "../components/MT/RadioGroup";


const ScreenSituationUser = props => {
    console.log("ici_Situation");

  const { pageIndex } = props;
  const data = DataPages[pageIndex - 1];

  return (
    <>
      <Header context={props} />
      {data && (
        <Title title={`${data[0].title}  `} txtInfo={`${data[0].info}`}></Title>
      )}
      <div className="body" id="body_form">
        <RadioGroup InterfaceData={data} context={props} />
      </div>
      <Footer context={props} />
    </>
  );
};
export default ScreenSituationUser;
