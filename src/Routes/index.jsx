import { Switch, Route } from "react-router-dom";
import FormReference from "../Pages/FormReference";
import LandingPage from "../Pages/LandingPage";
import Complete from "../Pages/Complete";

const Routes = () => {
  return(
    <Switch>
      <Route path="/">
        <LandingPage />
      </Route>
      <Route exact path="/form_reference">
        <FormReference />
      </Route>
      <Route exact path="/complete">
        <Complete />
      </Route>
    </Switch>
  );
};

export default Routes;
