import React, { useState, useEffect } from "react";
import axios from "axios";
import MTInput from "./MTInput";

export default function MTPostalCode(props) {
  const { name, handleChange, value, type, diasabled } = props;

  const [postalCode, setPostalCode] = useState("");
  const [postalCodes, setPostalCodes] = useState([]);

  useEffect(() => {}, [postalCodes]);

  const localHandleChange = e => {
    setPostalCode(e.target.value);
  };

  useEffect(() => {
    fetchPostalCode(postalCode);
  }, [postalCode]);

  const fetchPostalCode = async e => {
    if (e) {
      const response = await axios
        .get(`https://vicopo.selfbuild.fr/cherche/${postalCode}`)
        .then(response => {
          setPostalCodes(response.data.cities);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setPostalCodes([]);
    }
  };

  return (
    <>
      <input
        className={
          (diasabled ? " mtInputDisabled " : "mtInput ") +
          (type === "number" ? " right " : " mtInput ")
        }
        type={type}
        name={name}
        onChange={localHandleChange}
        value={postalCode}
        list="browsers"
      />
      <datalist id="browsers">
        {postalCodes.map(option => (
          <option value={option.code + " ( " + option.city + " )"} />
        ))}
      </datalist>
    </>
  );
}

{
  /* <Autocomplete
        options={postalCodes.map(
          option => option.code + " ( " + option.city + " )"
        )}
        inputValue={input}
        onChange={(e, v) => {
          setInput(v);
        }}
        onInputChange={fetchPostalCode}
        style={{ width: 400, marginTop: 20 }}
        renderInput={params => (
          <TextField
            {...params}
            label="Code postal"
            onChange={({ target }) => setInput(target.value)}
            variant="outlined"
            fullWidth
          />
        )}
      /> */
}
