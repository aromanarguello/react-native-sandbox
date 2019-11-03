import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkGray: "#dee1e8",
    lightGray: "#f2f5fa",
    successGreen: "#53dd6c"
  }
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
