import React from 'react';
import { deleteStateApi } from '../../services/api/stateApi';


export const StateItem = ({ id, name, dispatch }) => {

    const handleDeleteState = async(id) => {
        console.log("ID", id)
        const response = await deleteStateApi(id);
        console.log(response)
        // dispatch({
        //     type: stateTypes.remove,
        //     payload: {
        //         error: response.error,
        //         data: response.data,
        //     }
        // });
    }

    return (
        <li className="list-group-item">
            <span> { name } </span>

            <div className="float-sm-right">
                <button className="btn btn-danger m-1" title="Eliminar"
                    onClick={() => handleDeleteState(id)}> 
                    <span><i className="fa fa-trash"></i></span>
                </button>
                <button className="btn btn-warning m-1" title="Editar"> 
                    <span><i className="fa fa-edit"></i></span>
                </button>
                <button className="btn btn-default m-1" title="Ver más"> 
                    <span><i className="fa fa-eye"></i></span>
                </button>
            </div>
           
        </li>
    )
}
