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

import About from "./views/About";
import GettingStarted from "./views/GettingStarted";


import Dashboard from "./views/Dashboard"



import Leccion from "./views/leccion";
import Footer from "./Components/Footer";
import Login from "./Components/login";


import Foro from "./views/Foro";
import Faq from "./views/Faq";
import Home from "./views/Home";




function App() {
  return (


    

    <BrowserRouter>        

      <Navbar />
        <Route exact path="/Dashboard" component={Dashboard} />
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
