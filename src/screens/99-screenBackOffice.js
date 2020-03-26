import React, { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import PagesPaths from "../constantes/PagesPaths";

const ScreenBackOffice = props => {
  const { pageIndex } = props;

  return (
    <>
      <div>{pageIndex}</div>
    </>
  );
};
export default ScreenBackOffice;
