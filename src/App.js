import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Contact from "./views/Contact";
import Navbar from "./Components/Navbar";
import Home from "./views/home";
import About from "./views/About";
import GettingStarted from "./views/GettingStarted";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>        
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/GettingStarted" component={GettingStarted} />
      </Switch>      
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
