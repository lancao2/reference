import { Switch, Route } from "react-router-dom";
import FormReference from "../Pages/FormReference";
import LandingPage from "../Pages/LandingPage";
import Complete from "../Pages/Complete";

const Routes = () => {
    <Switch>
        <Route exact path="/"><LandingPage/></Route>
        <Route exact path="/Form_Reference"><FormReference/></Route>
        <Route exact path="/"><Complete/></Route>
    </Switch>
}

export default Routes