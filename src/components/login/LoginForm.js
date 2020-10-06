import React from 'react';
import { useForm } from '../../hooks/useForm';

export const LoginForm = () => {

    const [data, handleInputChange] = useForm({email: '', password: ''});


    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log("Submit")
        console.log("asdasdasda")
    }
    return (
        <div className="container-md">
            
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">

                <div className="col-md-12 border m-3 p-4">
                <form onSubmit={ handleSubmit }>
                    <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                        <label htmlFor="email" 
                            className="text-info">Email </label>

                        <input className="form-control" 
                            type="email" name="email"
                            value={data.email}
                            onChange = { handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" 
                            className="text-info">Password </label>
                        <input className="form-control" 
                            type="password" 
                            name="password"
                            value={data.password}
                            onChange={ handleInputChange }/>
                    </div>
                    <button type="submit" className="btn btn-info btn-block" >Login</button>
                </form>
                </div>

                </div>
                
               
            </div>

        </div>
    )
}
