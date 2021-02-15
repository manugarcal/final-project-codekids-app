import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./views/home";
import About from "./views/About";
import GettingStarted from "./views/GettingStarted";
import Login from "./Components/login";
import Faq from "./views/Faq";
import Foro from "./views/Foro";


function App() {
  return (
    <BrowserRouter>        
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/GettingStarted" component={GettingStarted} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Faq" component={Faq} />
        <Route exact path="/Foro" component={Foro} />
      </Switch>      
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
