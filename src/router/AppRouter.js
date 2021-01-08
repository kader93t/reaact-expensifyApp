import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import DashBoardPage from "../components/DashBoardPage"
import CreateExpensePage from "../components/CreateExpensePage"
import EditeExpensePage from "../components/EditeExpensePage"
import HelpPage from "../components/HelpPage"
import NotFoundPage from "../components/NotFoundPage"

import Header from "../components/Header"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={DashBoardPage}/>
                <Route path="/create" component={CreateExpensePage} />
                <Route path="/edite/:id" component={EditeExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;