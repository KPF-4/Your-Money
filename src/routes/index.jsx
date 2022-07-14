import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import News from "../pages/news";
import Support from "../pages/support";
import Dashboard from "../pages/dashboard";
import SobreNos from "../pages/sobreNos";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/registro">
        <Register />
      </Route>

      <Route exact path="/noticias">
        <News />
      </Route>

      <Route exact path="/suporte">
        <Support />
      </Route>
      <Route exact path="/sobreNos">
        <SobreNos />
      </Route>
    </Switch>
  );
};

export default Routes;
