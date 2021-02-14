
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import CardsIndex from "./Components/CardsIndex";
import Navbar from "./Components/Navbar";
import Home from "./views/Home";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      </Switch>
      <CardsIndex />
    </BrowserRouter>
  );
}

export default App;
