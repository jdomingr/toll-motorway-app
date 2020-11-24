import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomeScreen } from '../home/HomeScreen'
import { StateScreen } from '../state/StateScreen'
import { UserScreen } from '../user/UserScreen'

export const Main = () => {
    return (
        <div className="dashboard__main">
             <Switch>
                <Route exact path="/home" component = { HomeScreen } />
                <Route exact path="/users" component = { UserScreen } />
                <Route exact path="/states" component = { StateScreen } />
                <Redirect to="/home"/>
            </Switch>
        </div>
    )
}
