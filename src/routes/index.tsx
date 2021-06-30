import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/jussi" component={Home} />
        <Redirect from="*" to="/jussi" />
      </Switch>
    </Router>
  </>
);

export default Routes;
