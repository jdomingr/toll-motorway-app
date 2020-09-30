import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DashboardRoutes } from '../routers/DashboardRoutes';
import { Main } from '../components/login/Main';

export const AppRouter = () => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ Main }/>
                    <Route path="/" component={ DashboardRoutes }/>
                </Switch>
            </div>
        </Router>
    );
}