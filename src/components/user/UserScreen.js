import React, { useState } from 'react';
import { List } from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faList} from '@fortawesome/free-solid-svg-icons';
import { Form } from './Form';

export const UserScreen = () => {

    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        
        setShowForm(!showForm);

    }

    return (
        <div className="dashboard__main-container">
            <div className="dashboard__container-header mt-2 mb-1">
                <h3>Users</h3>
                { (showForm) ?
                <button className="btn__add"
                    onClick={ handleShowForm }>
                    <FontAwesomeIcon icon={ faList } className="icon mr-1"/>
                    List
                </button>
                :
                <button className="btn__add"
                    onClick={ handleShowForm }>
                    <FontAwesomeIcon icon={ faPlus } className="icon mr-1"/>
                    Add
                </button>
                }
            </div>
            { (showForm) ? <Form /> : <List />}
            
        </div>
    )
}
