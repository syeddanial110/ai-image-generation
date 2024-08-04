import { TextField } from "@mui/material";
import React from "react";

const UITextfield = ({onChange, value, placeholder, fullWidth}) => {
  return (
    <TextField
      variant="outlined"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      fullWidth={fullWidth}
      sx={{
        border: "none",
        outline: "none",
        color: `white !important`,
        background: "transparent",
        "& * > fieldset > legend": {
          display: "none",
        },
        "& fieldset": {
          borderRadius: "16px",
          border: "1px solid white",
          "&:focus-visible": { border: "1px solid white !important" },
        },

        "& label": {
          fontSize: "1rem",
        },
        "&:hover": {
          "& fieldset": {
            border: `1px solid white !important`,
          },
        },

        ".MuiOutlinedInput-root": {
          fontSize: "1rem",
          fontWeight: 500,
          outline: "none",
          "> input": {
            padding: "12px",
            color: `white !important`,
            WebkitBoxShadow: "0 0 0px 0px white inset",
          },
          "> input::placeholder": {
            color: "white",
          },
          "&.Mui-focused fieldset": {
            border: `1px solid white`,
          },
        },
        ".MuiFormHelperText-root": {
          background: "transparent",
        },

        borderRadius: "16px",
        input: {
          "&::placeholder": {
            textOverflow: "ellipsis !important",
            color: "white",
          },
        },
      }}
     
    />
  );
};

export default UITextfield;
