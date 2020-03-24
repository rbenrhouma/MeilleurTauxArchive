import React from "react";
import "./style.css";
import ProgressBar from "./ProgressBar";

const Footer = props => {
  const { onNextPage, onPriorPage, pageInex, currentFormIsValid } = props;
  const maxPage = 8;
  return (
    <>
      <div className="pagination" id="btn_form">
        <div className="btnContainer">
          {pageInex > 1 && pageInex < maxPage && (
            <a className="prev btPrev " onClick={onPriorPage}>
              <span>Précédent</span>
            </a>
          )}
        </div>
        {pageInex < maxPage && <ProgressBar pourcentage={props.progression} />}
        <div className="btnContainer">
          {pageInex < maxPage && (
            <a
              className={
                currentFormIsValid ? "next btNext" : "next btNextDisabled"
              }
              onClick={onNextPage}
            >
              <span>{pageInex === maxPage - 1 ? "VALIDER" : "SUIVANT"}</span>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
export default Footer;
