import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                   
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/dashboard" exact>Home</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/dashboard" exact>Users</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/dashboard/state" exact>State/City</NavLink>
                    
                </ul>
            </div>
            
        </nav>
    )
}
