import React from 'react'
import { Aside } from './Aside'
import { Main } from './Main'

export const DashboardScreen = () => {
    return (
        <div className="dashboard__container-main" >
            <Aside />
            <Main />
        </div>
    )
}
