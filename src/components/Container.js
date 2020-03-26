import React, { useState } from "react";

//-----------   Regrouper le Header, Title, Body et footer
import Header from "./Header";
import Title from "./Title";
import Body from "./Body";
import Footer from "./Footer";

const Container = props => {
  return (
    <>
      <Header context={props} />
      <Title context={props} />
      <Body context={props} />
      <Footer context={props} />
    </>
  );
};
export default Container;
