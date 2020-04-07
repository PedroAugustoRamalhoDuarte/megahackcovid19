import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import MainNavigation from "./components/layout/Navigation/MainNavigation";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import ClientLandPage from "./components/layout/ClienteLayout/ClientLandpage";
import MedicoMainLayout from "./components/layout/MedicoLayout/MedicoMainLayout";
import ClientProfilePage from "./components/layout/ClienteLayout/ClientProfile";
import AnaliseRemedio from "./components/layout/ClienteLayout/Analises/AnaliseRemedio";
import RemedioControl from './components/layout/ClienteLayout/RemedioControl/MainRemedioControl'
import Dashboard from "./components/dashboard/Dashboard";
import DrugStore from "./components/dashboard/DrugStore";
import Calendar from "./components/calendar/Calendar";
import FarmaciaPerfil from './components/layout/FarmaciaLayout/FarmaciaPerfil'
import DoctorDashboard from "./components/dashboard/DoctorDashboard";
import Receita from './components/layout/ClienteLayout/Receitas/Receita'
import ScheduleAppointment from "./components/appointment/SchedulePage";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <MainNavigation />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute
                  condition="medico"
                  exact
                  path="/appointment"
                  component={ScheduleAppointment} />
              <PrivateRoute
                condition="paciente"
                exact
                path="/clientLandPage"
                component={ClientLandPage}
              />
              <PrivateRoute
                condition="paciente"
                exact
                path="/clienteProfile"
                component={ClientProfilePage}
              />
              <PrivateRoute
                condition="paciente"
                exact
                path="/analiseRemedio"
                component={AnaliseRemedio}
              />
              <PrivateRoute
                condition="paciente"
                exact
                path="/remedioControl"
                component={RemedioControl}
              />
              <PrivateRoute
                condition="paciente"
                exact
                path="/receita"
                component={Receita}
              />
              <PrivateRoute
                condition="medico"
                exact
                path="/medicoLandPage"
                component={MedicoMainLayout}
              />
              <PrivateRoute
                  condition="medico"
                  exact
                  path="/doctor/dashboard"
                  component={DoctorDashboard}
              />
              <PrivateRoute
                condition="medico"
                exact
                path="/calendar"
                component={Calendar}
              />
              <PrivateRoute
                condition="farmacia"
                exact
                path="/farmacia"
                component={DrugStore}
              />
              <PrivateRoute
                condition="farmacia"
                exact
                path="/farmaciaPerfil"
                component={FarmaciaPerfil}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
