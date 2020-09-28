import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DashboardRoutes } from '../routers/DashboardRoutes';
import { Main } from '../components/login/Main';

export const AppRouter = () => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Main }/>
                    <Route path="/dashboard" component={ DashboardRoutes }/>
                </Switch>
            </div>
        </Router>
    );
}