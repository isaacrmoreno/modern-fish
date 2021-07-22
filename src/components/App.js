import Docs from "./Docs";
import Home from "./Home";
import Navigation from "./Navigation";
import {Helmet} from "react-helmet";

// import License from "./License";
// import Sponsors from "./Sponsors";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Modern Fish</title>
        <link rel="canonical" href="https://github.com/isaacrmoreno/modern-fish" />
        <meta name="description" content="Modern Fish aims to simplify the fishing experience surrounding equipment, setup, and species information to empower the public to get outside and fish"/>
    </Helmet>
    <Router>
      <Navigation/>
        <Switch>
          <Route exact path ="/" component={Home}/> 
          <Route exact path="/docs" component={Docs}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
