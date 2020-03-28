import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DataPages from "../constantes/InterfaceData";
import Title from "../components/Title";
import email from "../assets/visuel-desktop-email.jpg";
import MTInputBar from "../components/MT/MTInputBar";
import conf from "../assets/confidentiel.png";

const ScreenCoordonneesUser = props => {
  const { pageIndex, title, checkFormValide } = props;
  const data = DataPages[pageIndex - 1];

  const { devis, setDevis } = props.context;

  const [mail, setMail] = useState("");
  const [formeValide, setFormeValide] = useState(false);
  const [eMailValide, setEMailValide] = useState(false);
  const [okMail, setOkMail] = useState(false);

  useEffect(() => {
    setFormeValide(okMail && eMailValide);
    devis.email = mail;
  }, [okMail, eMailValide, mail]);

  const onChange = e => {
    setMail(e.target.value);
  };

  return (
    <>
      <Header context={props} />
      {data && (
        <Title title={`${data[0].title}  `} txtInfo={`${data[0].info}`}></Title>
      )}
      <div className="body" id="body_form">
        <div>
          <div className="devisAlertContainer">
            <div className="center">
              Un devis vous sera envoyé mail avec un récapitulatif de vente
              demande.
            </div>
            <div className="">
              <img src={email} alt={"visuel-desktop-email"} />
            </div>
          </div>
          <MTInputBar
            name={"email"}
            value={mail}
            type={"email"}
            odd={true}
            handleChange={onChange}
            caption={"Adresse email de l'enpreinteur *"}
            txtInfo={"bla bla bla 11111111..."}
            icone={conf}
          />

          <div className="mtCheckboxContainer">
            <input
              className="mtCheckbox"
              type="checkbox"
              id="okmail"
              name="okmail"
              onChange={() => {
                setOkMail(!okMail);
              }}
            />
            <label className="mtCheckboxLabel" for="okmail">
              J'accepte de recevoir par email des propositions de Meilleurtaux.
            </label>
          </div>
        </div>
      </div>
      <Footer context={props} />
    </>
  );
};
export default ScreenCoordonneesUser;
