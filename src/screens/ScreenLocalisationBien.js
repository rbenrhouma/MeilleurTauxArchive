import React, { useState } from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import PagesPaths from "../constantes/PagesPaths";
import DataPages from "../constantes/InterfaceData";
import Title from "../components/Title";
import RadioGroup from "../components/MT/RadioGroup";

import MTInputBar from "../components/MT/MTInputBar";

const ScreenLocalisationBien = props => {
  const [country, setCountry] = useState("FR");
  const [zipCode, setZipCode] = useState("FR");
  const { pageIndex } = props;
  const data = DataPages[pageIndex - 1];
  const handleChange = () => {};
  return (
    <>
      <Header context={props} />
      {data && (
        <Title title={`${data[0].title}  `} txtInfo={`${data[0].info}`}></Title>
      )}
      <div className="body" id="body_form">
        <div>
          <MTInputBar
            name={"coutry"}
            handleChange={handleChange}
            context={props.context}
            value={country}
            type={"text"}
            type2={"country"}
            odd={true}
            caption={"Dans quel pzys se situe votre projet ? *"}
            txtInfo={"bla bla bla 11111111..."}
          />
          <MTInputBar
            name={"zipCode"}
            handleChange={handleChange}
            context={props.context}
            value={zipCode}
            type={"text"}
            type2={"zipCode"}
            odd={true}
            caption={"Ville ou code postal *"}
            txtInfo={"bla bla bla 11111111..."}
          />
          <div style={{ paddingLeft: 50 }}>
            <h4>
              La connaissance de code postal du bien permettra de calculer les
              frais de notaire selon les conditions en vigueur dans le
              département concerné.
            </h4>
            <h4>
              Si vous êtes en recherche de bien sur plusieurs communes, indiquez
              une commune ciblée.
            </h4>
          </div>
        </div>
      </div>
      <Footer context={props} />
    </>
  );
};
export default ScreenLocalisationBien;
