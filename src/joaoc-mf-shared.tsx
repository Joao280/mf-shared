import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import GoBackBtn from "./components/GoBackBtn/GoBackBtn";

export const goBackBtnParcel = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: GoBackBtn,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});
