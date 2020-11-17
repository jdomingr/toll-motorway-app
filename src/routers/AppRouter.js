import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from '../components/login/Login'
import { DashboardScreen } from '../components/dashboard/DashboardScreen';

export const AppRouter = () => {
    return(
        <Router>
            <>
                <Switch>
                    <Route exact path="/login" component={ Login }/>
                    <Route path="/" component={ DashboardScreen }/>
                </Switch>
            </>
        </Router>
    );
}