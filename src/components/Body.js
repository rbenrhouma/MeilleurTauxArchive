import React from "react";
import RadioGroup from "./MT/RadioGroup";
import DataPages from "../constantes/InterfaceData";
import Title from "./Title";
import GoodLocalisation from "./GoodLocalisation";
import GoodCost from "./GoodCost";
import ContactDetails from "./ContactDetails";
import TheEnd from "./TheEnd";
import "./style.css";

const Body = props => {
  const { pageIndex, checkFormValide } = props;
  const data = DataPages[pageIndex - 1];

  return (
    <>
      {data && <Title title={`${data[0].title}  - (${pageIndex})`}> </Title>}
      <div className="body" id="body_form">
        {pageIndex < 5 && <RadioGroup InterfaceData={data} />}
        {pageIndex === 5 && <GoodLocalisation />}
        {pageIndex === 6 && <GoodCost />}
        {pageIndex === 7 && (
          <ContactDetails checkFormValide={checkFormValide} />
        )}
        {pageIndex === 8 && <TheEnd numDossier={"00000000000000"} />}
      </div>
    </>
  );
};
export default Body;
