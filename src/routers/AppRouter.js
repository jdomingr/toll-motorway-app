import React from 'react';
import {BrowserRouter as Router, Switch } from 'react-router-dom'
import { Login } from '../components/login/Login'
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { PrivateRoutes } from './PrivateRoutes';
import { UserContext } from '../context/loginContext';
import { PublicRoutes } from './PublicRoutes';
import { useContext } from 'react';

export const AppRouter = () => {

    const [user] = useContext(UserContext);
    return(
        <Router>
            <>
                <Switch>
                    <PublicRoutes exact path="/login" component={ Login } isLogged={user.isLogged}/>
                    <PrivateRoutes path="/" component={ DashboardScreen } isLogged={user.isLogged}/>
                </Switch>
            </>
        </Router>
    );
}