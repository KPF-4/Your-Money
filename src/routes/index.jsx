import { Switch, Route } from "react-router-dom"

import Home from "../components/pages/home"
import Login from "../components/pages/login"
import Register from "../components/pages/register"
import News from "../components/pages/news"
import Support from "../components/pages/support"


function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
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
        </Switch>
    )
}

export default Routes