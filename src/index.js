import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Homepage/Homepage';
import ForgotPassword from './Homepage/ForgotPassword/ForgotPassword';
import TodoPage from './TodoPage/TodoPage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/forgotpassword">
        <ForgotPassword />
      </Route>
      <Route path="/todopage">
        <TodoPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
