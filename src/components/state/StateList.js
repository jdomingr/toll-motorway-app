import React from 'react';
import { StateItem } from './StateItem';

export const StateList = ( {states, dispatch} ) => {

    if(!states) return null; 

    return(
        <div>
            <ul className="list-group list-group-flush">
                { states.map( state => (
                    <StateItem key={state.id} {...state} dispatch = {dispatch}/>
                ))}
            </ul>
        </div>


    );

}