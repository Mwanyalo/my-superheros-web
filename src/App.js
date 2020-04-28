import React, { Component } from "react";
import "./App.scss";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import * as HeroProvider from "./providers/HeroProvider";

import HomePage from "./pages/HomePage/HomePage";
import HeroesPage from "./pages/HeroesPage/HeroesPage";
import HeroDetails from "./pages/HeroDetails/HeroDetails";

class App extends Component {
  render() {
    return (
      <HeroProvider.Provider>
        <HeroProvider.Consumer>
          {(context) => (
            <Router {...context}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={() => <HomePage {...context} />}
                  />
                  <Route
                    path="/search/:name"
                    component={(props) => (
                      <HeroesPage {...context} {...props} />
                    )}
                  />
                  <Route
                    path="/hero/:id"
                    component={(props) => (
                      <HeroDetails {...context} {...props} />
                    )}
                  />
                  <Redirect from="/search" to="/" />
                </Switch>
              </div>
            </Router>
          )}
        </HeroProvider.Consumer>
      </HeroProvider.Provider>
    );
  }
}
export default App;
