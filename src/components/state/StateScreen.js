import React, { useReducer, useState } from 'react'
import { stateTypes } from '../../types/stateTypes'
import { StateForm } from './StateForm'
import { StateList } from './StateList'
import { stateReducer } from './stateReducer'

export const StateScreen = () => {

    const [showForm, setShowForm] = useState(false)
    const initialStates = [
        {id: 1, name: 'Primero'},
        {id: 2, name: 'Segundo'},
        {id: 3, name: 'Tercero'},
        {id: 4, name: 'Cuarto'}
    ]
    const [state, dispatch] = useReducer(stateReducer, initialStates)

    const handleSetShowForm = () => {
        setShowForm(!showForm);
    }

    const handleAddState = () => {
        const newState = {id: `${new Date().getTime()}`, name: 'Quinto'}
        dispatch({
            type: stateTypes.add,
            payload: newState
        });
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-9 col-xs-6">
                    <h1>State</h1>
                </div>
                <div className="col-sm-3 col-xs-6">
                    { (!showForm) ? 
                        <button className="btn btn-primary float-right"
                            title="Add new State" onClick={ handleSetShowForm }>
                            <i className="fa fa-plus mr-2"></i> 
                            Add
                        </button> 
                        : 
                        <button className="btn btn-primary float-right"
                            title="Show List" onClick={ handleSetShowForm }>
                            <i className="fa fa-list mr-2"></i> 
                            List
                        </button>
                        }
                    
                    
                </div>
            </div>
            <div className="mt-5">
                { (showForm) ? <StateForm handleAddState = { handleAddState }/> : <StateList states = {state}/>}
            </div>
            
            
        </div>
    )
}
