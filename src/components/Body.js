import React from "react";
import RadioGroup from "./RadioGroup";
import DataPages from "../constantes/InterfaceData";
import Title from "./Title";
import GoodLocalisation from "./GoodLocalisation";
import GoodCost from "./GoodCost";
import ContactDetails from "./ContactDetails";
import "./style.css";

const Body = props => {
  const { pageIndex } = props;
  const data = DataPages[pageIndex - 1];
  return (
    <>
      <Title title={`${data[0].title}  - (${pageIndex})`}> </Title>
      <div className="body" id="body_form">
        {pageIndex < 5 && <RadioGroup InterfaceData={data} />}
        {pageIndex === 5 && <GoodLocalisation />}
        {pageIndex === 6 && <GoodCost />}
        {pageIndex === 7 && <ContactDetails />}
      </div>
    </>
  );
};
export default Body;
