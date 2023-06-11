import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";


ReactDOM.render(
    <RecoilRoot>
        <Home />
    </RecoilRoot>,
  document.getElementById("root")
);