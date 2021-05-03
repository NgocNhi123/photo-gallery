import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/home">
            <MainPage />
          </Route>
          <Route path="/register">
            <CreateAccountPage />
          </Route>
          <Router path="*">
            <h2 style={{ color: "red", width: "100%", textAlign: "center" }}>
              ERROR!!!
            </h2>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
