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
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
            <Route exact path={process.env.PUBLIC_URL + "/services"} component={Services} />
            <Route exact path={process.env.PUBLIC_URL + "/mission"} component={Mission} />
            <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
