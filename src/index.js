import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./Homepage/Homepage"
import ForgotPassword from "./Homepage/ForgotPassword/ForgotPassword"

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/forgotpassword" component={ForgotPassword} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

