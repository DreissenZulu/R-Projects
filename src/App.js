import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './font-face.css';
import Layout from "./components/layout";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Mission from "./components/mission";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
