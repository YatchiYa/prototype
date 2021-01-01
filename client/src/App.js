import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./component/landing-page/landing-main-page"
import MainHome from "./component/home/main_home"
import Portfolio from "./component/portfolio/main"
import Cv from "./component/portfolio/cv"
import Skills from "./component/skills/skills"
import Formation from "./component/formation/formation"

import h1 from "./component/home/h1"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={h1} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/formation" exact component={Formation} />
        <Route path="/cv" exact component={Cv} />
      </Router>
    );
  }
}

export default App;