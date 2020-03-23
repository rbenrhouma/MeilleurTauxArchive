import React from "react";
import logo from "../assets/logo.jpg";

const Header = props => {
  return (
    <div className="headerContainer">
      <div className="header">
        <img src={logo} alt={"logo"} />
        <h3>Crédit immobilier : 5 mn pour obtenir le meilleur taux</h3>
      </div>
    </div>
  );
};
export default Header;
