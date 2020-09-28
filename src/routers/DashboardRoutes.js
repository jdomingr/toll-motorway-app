import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';
import { Dashboard } from '../components/dashboard/Dashboard'
import { StateScreen } from '../components/state/StateScreen';
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Dashboard />
            <Switch>
                <Route exact path="/dashboard/state" component = { StateScreen } />
                <Redirect to="/dashboard"/>
            </Switch>
        </>
    )
}
