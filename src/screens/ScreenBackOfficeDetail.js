import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";

const ScreenBackOfficeDetail = ({ serverURL }) => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [devis, setDevis] = useState();

  useEffect(() => {
    const createData = devis => {
      return (
        <div>
          <p>Devis Number : {devis.numDevis}</p>
          <p>Type : {devis.typeBien}</p>
          <p>Ville : {devis.zipCode}</p>
          <p>E-mail : {devis.email}</p>
          <p>Prix acquisition : {devis.montant}</p>
          <p>Frais notaire : {devis.notaire}</p>
          <p>Prix total : {devis.total}</p>
        </div>
      );
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(serverURL + `devis?id=${id}`);
        setDevis(createData(response.data));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            paddingTop: "100px",
            display: "flex",
            flex: "1",
            justifyContent: "center"
          }}
        >
          <ReactLoading
            type="spinningBubbles"
            color="black"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>{devis}</div>
      )}
    </>
  );
};

export default ScreenBackOfficeDetail;
