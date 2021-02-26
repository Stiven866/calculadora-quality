import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/NavbarComonent";
import Suma from "../components/Suma";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/suma">
            <Suma />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
