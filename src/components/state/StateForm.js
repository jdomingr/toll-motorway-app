import React from 'react';
import { useForm } from '../../hooks/useForm';

export const StateForm = ({handleAddState}) => {

    const [data, handleInputChange ] = useForm({code: '', name: ''});


    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddState();
    }

    return(
        <div>
            <h2 className="text-center">Add State</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="m-3" onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <input type="text" className="form-control" 
                            placeholder = "Enter the code" value={ data.code }
                            onChange = { handleInputChange } />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" 
                            placeholder = "Enter the State name" value={ data.name }
                            onChange = { handleInputChange } />
                        </div>

                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}