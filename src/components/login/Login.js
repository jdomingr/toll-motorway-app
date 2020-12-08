import React, { useContext, useReducer } from 'react'
import { authApi } from '../../api/auth'
import { UserContext } from '../../context/loginContext'
import { useForm } from '../../hooks/useForm'
import { uiReducer } from '../../reducers/uiReducer'
import { types } from '../../types/types'
import { LinearLoading } from '../ui/LinearLoading'



export const Login = () => {
    //first position is user
    const [ , dispatch] = useContext(UserContext);

    const [dataLogin, handleInputChange] = useForm({email: '', password: ''});

    const [ui, dispatchUI] = useReducer(uiReducer, {});
    
    const handleLogin = async (e) => {

        e.preventDefault();

        dispatchUI({
            type: types.startLoading
        });

        const resp = await authApi(dataLogin);

        dispatchUI({
            type: types.finishLoading
        });

        if(resp.success){
            const {user, token} = resp;
            dispatch({
                type: types.login,
                payload: {
                    ...user,
                    token
                }
            });
        }
    }



    return (
       
        <div className="login__container m-2 p-2">
            <h3 className="login__title"> Login </h3>
            <form onSubmit={handleLogin} className="login__form p-4">
                <div>
                    <input className="login__input" type="text" 
                        name="email" placeholder="Enter your Email"
                        onChange={ handleInputChange }
                        value={ dataLogin.email }/>
                </div>
                <div>
                    <input className="login__input" type="password" name="password"
                        onChange={ handleInputChange } placeholder="Enter your pass"
                        value={dataLogin.password}/>
                </div>
                <button className="login__button mt-2 p-1 pointer">Login</button>
            </form>
             { ui.isLoading && <LinearLoading />}
        </div>
    
    )
}
