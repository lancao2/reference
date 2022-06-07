import { Switch, Route } from "react-router-dom";
import FormReference from "../Pages/FormReference";
import LandingPage from "../Pages/LandingPage";
import Complete from "../Pages/Complete";

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/formreference">
        <FormReference />
      </Route>
      <Route path="/complete">
        <Complete />
      </Route>
    </Switch>
  );
};

export default Routes;
