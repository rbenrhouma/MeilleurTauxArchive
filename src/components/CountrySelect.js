import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import countriesList from "../constantes/CountryData";

// function countryToFlag(isoCode) {
//   return typeof String.fromCodePoint !== "undefined"
//     ? isoCode
//         .toUpperCase()
//         .replace(/./g, char =>
//           String.fromCodePoint(char.charCodeAt(0) + 127397)
//         )
//     : isoCode;
// }

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  }
});

export default function CountrySelect() {
  const classes = useStyles();

  return (
    <Autocomplete
      id="country-select"
      style={{ width: 400 }}
      options={countriesList}
      classes={{
        option: classes.option
      }}
      autoHighlight
      getOptionLabel={option => option.label}
      renderOption={option => (
        <React.Fragment>
          {/* <span>{countryToFlag(option.code)}</span> */}
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label="Pays"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password" // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
