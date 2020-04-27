import React from "react";
import "./App.scss";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import * as HeroProvider from "./providers/HeroProvider";

import HomePage from "./pages/HomePage/HomePage";
import HeroesPage from "./pages/HeroesPage/HeroesPage";
import HeroDetails from "./pages/HeroDetails/HeroDetails";

function App() {
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
                  path="/heroes"
                  component={() => <HeroesPage {...context} />}
                />
                <Route
                  path="/hero/:id"
                  component={() => <HeroDetails {...context} />}
                />
                <Redirect from="/" to="/" />
              </Switch>
            </div>
          </Router>
        )}
      </HeroProvider.Consumer>
    </HeroProvider.Provider>
  );
}

export default App;
