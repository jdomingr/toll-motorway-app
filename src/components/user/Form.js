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

    const roles = [{id: 1, type: 'ADMIN_ROLE'}, { id: 2, type: 'USER_ROLE'}]

    return (
        <div className="form__container">
            <form className="form__add animate__animated animate__fadeIn">
                <div className = "form__group m-2">
                <label htmlFor="name">Name</label>
                    <input className = "form__input mt-1 p-2" 
                        type = "text" placeholder = "Name"
                        name = "name"
                        value = { data.name }
                        onChange = { handleInputChange } />
                </div>
                
                <div className = "form__group m-2">
                    <label htmlFor="last_name">Last Name</label>
                    <input className = "form__input mt-1 p-2" type = "text"
                        placeholder = "Last name"
                        name = "last_name"
                        value = { data.last_name }
                        onChange = { handleInputChange } />
                </div>
                <div className = "form__group m-2">
                <label htmlFor="email">Email</label>
                <input className = "form__input mt-1 p-2" type = "text"
                    placeholder = "Email"
                    name = "email"
                    value={ data.email } 
                    onChange = { handleInputChange }/>
                </div>
                <div className = "form__group m-2">
                    <label htmlFor="role">Role</label>
                    <select className = "form__input mt-1 p-2" type = "text" 
                        placeholder = "Role"
                        name = "role"
                        value = { data.role }
                        onChange = { handleInputChange } >
                    { roles.map((role) => (
                        <option key={ role.id } value={role.type}>{ role.type }</option>
                    ))}
                    </select>
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
