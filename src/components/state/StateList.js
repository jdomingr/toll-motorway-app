import React from 'react';
import { StateItem } from './StateItem';

export const StateList = ( {states} ) => {
    console.log("states", states)
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