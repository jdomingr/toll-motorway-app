import React from 'react'


export const Login = () => {
    return (
        <div className="login__container m-2 p-2">
            <h3 className="login__title"> Login </h3>
            <form className="login__form p-4">
                
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
