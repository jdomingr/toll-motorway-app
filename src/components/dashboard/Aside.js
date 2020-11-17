import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faArchway} from '@fortawesome/free-solid-svg-icons';
import { faCashRegister} from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

export const Aside = () => {
    return (
        <aside className="dashboard__aside">
            <h3 className="aside__title">
                Bienvenido Usuario
            </h3>
            <nav>
                <ul>
                    <li> <FontAwesomeIcon icon={ faUsers } />
                        <NavLink activeClassName="active" className="nav__li "to="/users" exact> Users</NavLink>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={ faFlag } />    
                        <NavLink activeClassName="active" className="nav__li "to="/states" exact> States</NavLink>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={ faCity } />
                        Cities
                    </li>
                    <li>
                        <FontAwesomeIcon icon={ faArchway } />
                        Toll Roads
                    </li>
                    <li>
                        <FontAwesomeIcon icon={ faCashRegister } />
                        Toll Booths
                    </li>
                    <li>
                        <FontAwesomeIcon icon={ faCar } />
                        Vehicles
                    </li>
                    <li>
                        <FontAwesomeIcon icon={ faMoneyCheck } />
                        Pays
                    </li>
                </ul>
            </nav>
            <button className="aside__btn">
                Cerrar Sesión
            </button>
        </aside>
    )
}
