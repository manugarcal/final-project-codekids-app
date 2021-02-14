

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Contact from "./views/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./views/home";
import About from "./views/About";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/About" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
