import React, { useState } from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import PagesPaths from "../constantes/PagesPaths";
import DataPages from "../constantes/InterfaceData";

import Title from "../components/Title";
import RadioGroup from "../components/MT/RadioGroup";

import GoodLocalisation from "../components/GoodLocalisation";
import GoodCost from "../components/GoodCost";
import ContactDetails from "../components/ContactDetails";

const ScreenCoordonneesUser = props => {
  const { pageIndex, title, checkFormValide } = props;
  const data = DataPages[pageIndex - 1];

  return (
    <>
      <Header context={props} />
      {data && (
        <Title title={`${data[0].title}  `} txtInfo={`${data[0].info}`}></Title>
      )}
      <div className="body" id="body_form">
        {pageIndex === 5 && <GoodLocalisation context={props} />}
        {pageIndex === 6 && <GoodCost context={props} />}
        {pageIndex === 7 && (
          <ContactDetails checkFormValide={checkFormValide} context={props} />
        )}
      </div>
      <Footer context={props} />
    </>
  );
};
export default ScreenCoordonneesUser;
