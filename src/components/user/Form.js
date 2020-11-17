import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Form = () => {


    return (
        <div>
            <form className="form__modal">
                <div>
                    <input className="form__input" type="text" placeholder="Name" />
                </div>
                <div>
                    <input className="form__input" type="text" placeholder="Last name" />
                </div>
                <div>
                <input className="form__input" type="text" placeholder="Email" />
                </div>
                <div>
                    <input className="form__input" type="text" placeholder="Role" />
                </div>
                
                <button className="btn__add"><FontAwesomeIcon icon={faPlus} />Add User</button>
            </form>
        </div>
            
            
               
      
    )
}
