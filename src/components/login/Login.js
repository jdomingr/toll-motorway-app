import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { authApi } from '../../api/auth'
import { UserContext } from '../../context/loginContext'
import { types } from '../../types/types'


export const Login = () => {

    const [userData, dispatch] = useContext(UserContext);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await authApi();
        if(data){
            const {user, token} = data;
            dispatch({
                    type: types.login,
                    payload: {
                        ...user
                    }
            });
        }
    }

   
    if(userData.isLogged){
        return  <Redirect to="/dashboard"/>
    }
    return (
        
        <div className="login__container m-2 p-2">
            <h3 className="login__title"> Login </h3>
            <form onSubmit={handleLogin} className="login__form p-4">
                
                <div>
               
                    <input className="form__input" type="text" placeholder="Enter your Email"/>
                </div>
                <div>
                    <input className="form__input" type="password" placeholder="Enter your pass"/>
                </div>
                <button className="login__button mt-2 p-1 pointer">Login</button>
            </form>
        </div>
    
    )
}
