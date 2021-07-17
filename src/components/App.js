import About from "./About";
import Header from "./Header";
import License from "./License";
// import Sponsors from "./Sponsors";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <License/>
        </Route>
        {/* <Sponsors/> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
