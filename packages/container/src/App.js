import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header />
          <MarketingApp />
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
