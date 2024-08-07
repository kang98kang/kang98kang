import React from "react";
import ReactDOM from "react-dom/client";
import * as D from "./data";
import "./index.css";
import "@fontsource/material-icons";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const children = ["강", "준", "영"].map((n: string) => (
//   <h3>Hello World! {n}</h3>
// ));

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomID()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
));

const rootVirtualDOM = <App />;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(rootVirtualDOM);
