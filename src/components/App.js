import Docs from "./Docs";
import About from "./About";
import Home from "./Home";
import Navigation from "./Navigation";
import License from "./License";
// import Sponsors from "./Sponsors";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SideBar from "./SideBar";

function App() {
  return (
    <>
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path ="/" component={Home}/> 
        <Route exact path="/about" component={About}/>
        <Route path="/" component={License}/>
        {/* <Sponsors/> */}
      </Switch>
        <Route exact path="/docs" component={Docs}/>
    </Router>
    </>
  );
}

export default App;
