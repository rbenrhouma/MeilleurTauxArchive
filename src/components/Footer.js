import React, { useState } from "react";
import "./style.css";

const Footer = props => {
  const nextPage = () => {};
  const priorPage = () => {};
  return (
    <>
      <div class="pagination" id="btn_form">
        <a className="prev btPrev" id="btPagiPrev" onclick={priorPage}>
          <span>Précédent</span>
        </a>
        <a className="next btNext" id="btPagiNext" onclick={nextPage}>
          <span>Suivant</span>
        </a>
      </div>
    </>
  );
};
export default Footer;
