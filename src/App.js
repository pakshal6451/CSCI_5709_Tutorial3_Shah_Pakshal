import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import ProfilePage from "./ProfilePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RegistrationForm} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default App;
