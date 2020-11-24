import React, { useEffect, useReducer } from 'react';
import { getUsersList } from '../../api/user';
import { types } from '../../types/types';
import { listReducer } from '../reducers/listReducer';

const initialState = {
    isLoading:  true,
    list: [],
}

export const List = () => {

    const [users, dispatch] = useReducer(listReducer, initialState);

    const getUsers = async() => {
        const { data } = await getUsersList(); 
        if(data){
            dispatch({
                type: types.fetchDataList,
                payload: [...data]
                
            });
        }

    }
    
    useEffect( () => {
        getUsers();   
    },[]);


    return (
        <div className="list__container">
            { (users.isLoading) ? <h1>Loading...</h1> : 
            (<table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Last name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Role
                        </th>
                        <th>
                            Status
                        </th>
                        <th>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                        {   users.list && 
                            users.list.map( (user) => 
                            <tr key={user._id}>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.last_name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.role}
                                </td>
                                <td>
                                    {(user.status) ? 'Active' : 'Inactive'}
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                
                            )
                        }
                       
                    
                </tbody>
            </table>)
        }
        </div>
    )
}
