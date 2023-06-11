import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme/theme";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";


ReactDOM.render(
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <Home />
      </ThemeProvider>
    </RecoilRoot>,
  document.getElementById("root")
);