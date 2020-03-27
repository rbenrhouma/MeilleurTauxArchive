import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import logo from "../assets/logo.jpg";

const Header = props => {
  const { pageIndex } = props.context;
  const [showButtonBackOffice, setShowButtonBackOffice] = useState(false);

  useEffect(() => {}, [showButtonBackOffice]);

  const onClick = () => {
    console.log("Lance back office");
    // provisoire
    Cookies.set("devis", null);
    Cookies.set("pageIndex", 1);
  };

  const onIconeClick = () => {
    if (pageIndex == 8) {
      setShowButtonBackOffice(!showButtonBackOffice);
    }
  };

  return (
    <div className="headerContainer">
      <div className="header">
        <img src={logo} alt={"logo"} onClick={onIconeClick} />
        <h3>Crédit immobilier : 5 mn pour obtenir le meilleur taux</h3>
      </div>
      <div>
        <div
          className={showButtonBackOffice ? "backObbiceBtn" : "noneElement"}
          onClick={onClick}
        >
          Back Office
        </div>
        <div>
          <input
            type="password"
            className={showButtonBackOffice ? "backObbiceInput" : "noneElement"}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Header;
