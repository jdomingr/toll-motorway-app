import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';
import { DashboardScreen } from '../components/dashboard/DashboardScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/dashboard" component = { DashboardScreen } />
                <Redirect to="/dashboard"/>
            </Switch>
        </>
    )
}
