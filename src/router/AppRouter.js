import React from 'react'
import { Router, Route, Switch, useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import  Login  from "../components/Login";
import DashBoardPage from "../components/DashBoardPage"
import CreateExpensePage from "../components/CreateExpensePage"
import EditeExpensePage from "../components/EditeExpensePage"
import HelpPage from "../components/HelpPage"
import NotFoundPage from "../components/NotFoundPage"
import PrivateRouter from './PrivateRouter';
import PublicRoute from "./PublicRoute"

export let history = createBrowserHistory();

const AppRouter = () => (    
    <Router history ={ history}>
        <div>
            <Switch>
                <PublicRoute path="/" exact={ true } component={Login} />
                <PrivateRouter path="/dashboard" component={DashBoardPage}/>
                <PrivateRouter path="/create" component={CreateExpensePage} />
                <PrivateRouter path="/edite/:id" component={EditeExpensePage} />
                <PrivateRouter path="/help" component={HelpPage} />
                <PrivateRouter component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;