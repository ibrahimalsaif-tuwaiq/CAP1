import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Instructions from "./components/Instructions";
import Levels from "./components/Levels";
import Easy from "./components/Easy";
import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/instructions" component={Instructions} />
        <Route exact path="/gamelevel" component={Levels} />
        <Route exact path="/easy" component={Easy} />
        {/* <Route exact path="/gamenormal" component={} /> */}
        {/* <Route exact path="/gamehard" component={} /> */}
        {/* <Route exact path="/finishmenu" component={} /> */}
        {/* <Route exact path="*" component={NotFound} /> */}
      </Switch>
    </>
  );
};

export default App;
