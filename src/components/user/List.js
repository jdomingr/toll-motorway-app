import React, { useEffect, useReducer } from 'react';
import { deleteUser, getUsersList } from '../../api/user';
import { types } from '../../types/types';
import { userReducer } from '../../reducers/userReducer';
import { Table } from '../ui/Table';
import { uiReducer } from '../../reducers/uiReducer';
import { CircularLoading } from '../ui/CircularLoading';
import { finishLoading, startLoading } from '../../actions/ui';
import { confirmAlert, customAlert } from '../../helpers/alerts';


const initialState = {
    list: [],
}

export const List = () => {
    
    const [users, dispatch] = useReducer(userReducer, initialState);
    const [ui, dispatchUI] = useReducer(uiReducer, {});

    const getUsers = async() => {

        dispatchUI( startLoading() );

        const { data } = await getUsersList(); 

        dispatchUI( finishLoading() );

        if(data){
            dispatch({
                type: types.getList,
                payload: [...data]
                
            });
        }
        
    }

    const actionDeleteUser = ( id ) => {

        confirmAlert('User status will change', 'Yes, change user status!')
            .then( async (result) => {
                if(result.isConfirmed){
                    const { success } = await deleteUser(id);
                    if(success){
                        customAlert('success', 'status change!', 'User status have been change.');
                    }
                }
            });
     

    };
    
    useEffect( () => {
        getUsers();   
    },[]);
  
    
    const columns = [
        {title: 'Name', field: 'name'},
        {title: 'Last Name', field: 'lastname'},
        {title: 'Email', field: 'email'},
        {title: 'Role', field: 'role'},
        {title: 'Status', field: 'status'}
    ];

    return (
        <div className="list__container animate__animated animate__fadeIn"> 
            { ui.isLoading && <CircularLoading />}   
            <Table data = { users } columns = { columns } actionDelete = { actionDeleteUser }/>
               
        </div>
    )
}
