import React from "react";

import "./style.css";

const TheEnd = props => {
  return (
    <div className="goodLocalisation">
      <p>Votre numéro de dossier est le : {props.numDossier}</p>
    </div>
  );
};
export default TheEnd;
