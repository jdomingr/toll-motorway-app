import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { StateScreen } from '../components/state/StateScreen';
import { UserScreen } from '../components/user/UserScreen';


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
