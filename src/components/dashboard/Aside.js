import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faArchway} from '@fortawesome/free-solid-svg-icons';
import { faCashRegister} from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/loginContext';
import { types } from '../../types/types';

export const Aside = () => {

    const [user, dispatch] = useContext(UserContext);

    const { name } = user;

    const handleLogout = () => {
        dispatch({
            type: types.logout,
        });
    }

    return (
        <aside className="dashboard__aside">
            <h3 className="aside__title">
                Bienvenido { name }
            </h3>
            <nav>
                <ul>
                    <li> 
                        
                        <NavLink activeClassName="active" className="nav__li" to="/home">
                            <FontAwesomeIcon icon={ faHome } className="icon mr-1"/>
                             Info
                            
                        </NavLink>
                      
                    </li>
                    <li> 
                        <NavLink activeClassName="active" className="nav__li" to="/users">
                            <FontAwesomeIcon icon={ faUsers } className="icon mr-1"/>
                             Users
                        </NavLink>
                    </li>
                    <li>
                        
                        <NavLink activeClassName="active" className="nav__li "to="/states" exact>
                            <FontAwesomeIcon icon={ faFlag } className="icon mr-1" />    
                            States
                         </NavLink>
                    </li>

                    <li>
                        <NavLink activeClassName="active" className="nav__li "to="/cities" exact>
                            <FontAwesomeIcon icon={ faCity } className="icon mr-1" />
                            Cities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="nav__li" to="toll-roads" exact>
                            <FontAwesomeIcon icon={ faArchway } className="icon mr-1" />
                            Toll Roads
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="nav__li" to="toll-booths" exact>
                            <FontAwesomeIcon icon={ faCashRegister } className="icon mr-1" />
                            Toll Booths
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="nav__li" to="vehicles" exact>
                            <FontAwesomeIcon icon={ faCar } className="icon mr-1" />
                            Vehicles
                        </NavLink>
                    </li>
                    <li>
                       
                        <NavLink activeClassName="active" className="nav__li" to="pays" exact>
                            <FontAwesomeIcon icon={ faMoneyCheck } className="icon mr-1" />
                            Pays
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button className="aside__btn" onClick = { handleLogout }>
                Cerrar Sesión
            </button>
        </aside>
    )
}
