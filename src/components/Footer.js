import React from "react";
import "./style.css";
import ProgressBar from "./ProgressBar";

const Footer = props => {
  const { onNextPage, onPriorPage, pageInex } = props;
  const maxPage = 8;

  return (
    <>
      <div className="pagination" id="btn_form">
        {pageInex > 1 && pageInex < maxPage && (
          <a className="prev btPrev btPagiPriorNext" onClick={onPriorPage}>
            <span>Précédent</span>
          </a>
        )}
        {pageInex < maxPage && <ProgressBar pourcentage={props.progression} />}
        {pageInex < maxPage && (
          <a className="next btNext btPagiPriorNext" onClick={onNextPage}>
            <span>{pageInex === maxPage - 1 ? "Valider" : "Suivant"}</span>
          </a>
        )}
      </div>
    </>
  );
};
export default Footer;
