import React from 'react'

export const StateItem = ({ id, name }) => {
    return (
        <li className="list-group-item">
            <span> { name } </span>

            <div className="float-sm-right">
                <button className="btn btn-danger m-1" title="Eliminar"> 
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
