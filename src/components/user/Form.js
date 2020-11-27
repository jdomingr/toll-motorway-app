import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '../../hooks/useForm';
import { saveUser } from '../../api/user';

export const Form = () => {

    const [ data, handleInputChange ] = useForm( { name: '', last_name: '', email: '', role: '' } );

    const handleSaveUser = ( e ) => {
        e.preventDefault();
        saveUser(data)
        .then( resp => console.log(resp))
        .catch(err => console.log(err));
    }

    return (
        <div className="form__container">
            <form className="form__add animate__animated animate__fadeIn">
                <div className = "form__group">
                <label htmlFor="name">Name</label>
                    <input className = "form__input m-2 p-2" 
                        type = "text" placeholder = "Name"
                        name = "name"
                        value = { data.name }
                        onChange = { handleInputChange } />
                </div>
                
                <div className = "form__group">
                    <label htmlFor="last_name">Last Name</label>
                    <input className = "form__input m-2 p-2" type = "text"
                        placeholder = "Last name"
                        name = "last_name"
                        value = { data.last_name }
                        onChange = { handleInputChange } />
                </div>
                <div className = "form__group">
                <label htmlFor="email">Email</label>
                <input className = "form__input m-2 p-2" type = "text"
                    placeholder = "Email"
                    name = "email"
                    value={ data.email } 
                    onChange = { handleInputChange }/>
                </div>
                <div className = "form__group">
                    <label htmlFor="role">Role</label>
                    <input className = "form__input m-2 p-2" type = "text" 
                        placeholder = "Role"
                        name = "role"
                        value = { data.role }
                        onChange = { handleInputChange } />
                </div>
                
                <div className="mt-2">
                    <button className = "btn__add"
                        onClick={ handleSaveUser }>
                        <FontAwesomeIcon icon = {faPlus} />
                            Add User
                    </button>
                </div>
            </form>
        </div>
            
            
               
      
    )
}
