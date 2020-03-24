import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";

export default function PostalCode() {
  const [input, setInput] = useState("");
  const [postalCodes, setPostalCodes] = useState([]);

  useEffect(() => {
    // postalCodes.map(city => {
    //   console.log(city.code + " - " + city.city);
    // });
  }, [postalCodes]);

  const onTagsChange = (event, values) => {};

  const fetchPostalCode = (e, v) => {
    if (e) {
      //console.log(e.target);
      axios
        .get(`https://vicopo.selfbuild.fr/cherche/${e.target.value}`)
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
    <div style={{ width: 300 }}>
      <Autocomplete
        options={postalCodes.map(
          option => option.code + " ( " + option.city + " )"
        )}
        inputValue={input}
        onChange={(e, v) => {
          setInput(v);
        }}
        onInputChange={fetchPostalCode}
        style={{ width: 300, marginTop: 20 }}
        renderInput={params => (
          <TextField
            {...params}
            label="Code postal"
            onChange={({ target }) => setInput(target.value)}
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
}
