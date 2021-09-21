import React from "react";

import Home from "./Home";
import Register from "./Register";
import Admin from "./Admin";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        
          <Route exact path="/">
            <Home />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
