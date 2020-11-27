import React, { useEffect, useReducer } from 'react';
import { getUsersList } from '../../api/user';
import { types } from '../../types/types';
import { userReducer } from '../../reducers/userReducer';

const initialState = {
    list: [],
}

export const List = () => {

    const [users, dispatch] = useReducer(userReducer, initialState);

    const getUsers = async() => {
        const { data } = await getUsersList(); 
        if(data){
            dispatch({
                type: types.getList,
                payload: [...data]
                
            });
        }

    }
    
    useEffect( () => {
        getUsers();   
    },[]);


    return (
        <div className="list__container animate__animated animate__fadeIn">
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
