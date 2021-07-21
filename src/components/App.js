import Docs from "./Docs";
import About from "./About";
import Home from "./Home";
import Navigation from "./Navigation";
// import License from "./License";
// import Sponsors from "./Sponsors";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path ="/" component={Home}/> 
        <Route exact path="/about" component={About}/>
        <Route exact path="/docs" component={Docs}/>
        {/* <Route exact path="/" component={License}/> */}
        {/* <Sponsors/> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
