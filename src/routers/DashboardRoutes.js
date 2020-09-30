import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';
import { Dashboard } from '../components/dashboard/Dashboard'
import { StateScreen } from '../components/state/StateScreen';
import { Navbar } from '../components/ui/Navbar'
import { UserScreen } from '../components/user/UserScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            {/* <Dashboard /> */}
            <Switch>
                <Route exact path="/user" component = { UserScreen } />
                <Route exact path="/state" component = { StateScreen } />
                <Route exact path="/dashboard" component = { Dashboard } />
                <Redirect to="/dashboard"/>
            </Switch>
        </>
    )
}
