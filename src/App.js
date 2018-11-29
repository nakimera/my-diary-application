import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import UserLogin from './views/login';
import SignUp from './views/signup';
import PageNotFound from './views/notFound';
import './App.css';
import HomePage from './components/entries/homePage';

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Router>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={UserLogin} />
            <Route exact path="/homepage" component={HomePage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
