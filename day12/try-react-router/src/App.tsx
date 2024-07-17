import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import ScreenC from "./ScreenC";
import { Route, Switch } from "react-router-dom";

function App() {
  const renderScreenC = (props: any) => {
    console.log("SceenC props", props);
    return <ScreenC {...props} message="This is ScreenC" />;
  };

  return (
    <Switch>
      <Route exact={true} path="/" component={ScreenA} />
      <Route path="/b" component={ScreenB} />
      <Route path="/c/:userid" render={renderScreenC} />
    </Switch>
  );
}

export default App;
