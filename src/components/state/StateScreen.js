import React, { useState } from 'react'
import { StateForm } from './StateForm'
import { StateList } from './StateList'

export const StateScreen = () => {

    const [showForm, setShowForm] = useState(false)

    const handleSetShowForm = () => {
        setShowForm(!showForm);
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
                { (showForm) ? <StateForm /> : <StateList />}
            </div>
            
            
        </div>
    )
}
