import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./layout/Navbar"
import Landing from "./layout/Landing";
import Login from "./components/loginComponent/login.component";
import SignUp from "./components/signupComponent/signup.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    </Router >
  );
}

export default App;