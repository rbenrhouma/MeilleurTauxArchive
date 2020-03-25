import React from "react";

import "./style.css";

const TheEnd = props => {
  return (
    <div className="theEndBody">
      <p>Votre numéro de dossier est le : </p>
      <p className="textBold">{`  ${props.numDossier}`}</p>
    </div>
  );
};
export default TheEnd;
