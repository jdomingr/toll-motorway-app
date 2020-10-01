import React from 'react';
import { StateItem } from './StateItem';

export const StateList = () => {
    const states = [
        {id: 1, name: 'Primero'},
        {id: 2, name: 'Segundo'},
        {id: 3, name: 'Tercero'},
        {id: 4, name: 'Cuarto'}
    ]
    return(
        <div>
            <ul className="list-group list-group-flush">
                { states.map( state => (
                    <StateItem key={state.id} {...state}/>
                ))}
            </ul>
        </div>


    );

}