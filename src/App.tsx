import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
