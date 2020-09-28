import React from 'react';
import { Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                   
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/" exact>Home</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/" exact>Users</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/" exact>State/City</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/" exact>Test</NavLink>
                    
                </ul>
            </div>
            
        </nav>
    )
}
