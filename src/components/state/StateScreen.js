import React, { useReducer, useState, useEffect } from 'react'
import { createStateApi, getStatesApi } from '../../services/api/stateApi'
import { stateTypes } from '../../types/stateTypes'
import { SpinnerLoading } from '../ui/SpinnerLoading'
import { StateForm } from './StateForm'
import { StateList } from './StateList'
import { stateReducer } from './stateReducer'

export const StateScreen = () => {

    const [showForm, setShowForm] = useState(false);
   
    const initialStateReducer = {loading: true, error: null, data:[]};

    //Reducer
    const [state, dispatch] = useReducer(stateReducer, initialStateReducer);

    const handleSetShowForm = () => {
        setShowForm(!showForm);
    }

    useEffect(() => {
      
        const getStates = async () => {
           const response = await getStatesApi();
           console.log(response);
           dispatch({
               type: stateTypes.load,
               payload:{
                   error: response.error,
                   data: response.data,
               }
           });
           
        } 
        getStates();
    }, [])

    
    const handleAddState = async (newState) => {
        const response = await createStateApi(newState);
        console.log(response);
        dispatch({
            type: stateTypes.add,
            payload: {
                error: response.error,
                data: response.data,
            }
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
                {
                    (state.loading) 

                    ? <SpinnerLoading /> 
                    
                    : (showForm)

                    ? <StateForm handleAddState = { handleAddState }/> 
                    
                    : <StateList states = {state.data} dispatch = {dispatch}/>}
            </div>
            
            
        </div>
    )
}
