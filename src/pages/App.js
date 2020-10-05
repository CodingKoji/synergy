import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import DashboardPage from "./Dashboard";
import HomePage from "./Home";
import Header from "../components/Header";
import "../styles/App.scss";
import Footer from "../components/Footer";
import PrivateRoute from "../components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <main>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
          </Switch>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
