import { useState } from 'react';

export const useForm = ( initialState = {} ) => {

    const [data, setData] = useState( initialState );

    const handleInputChange = ( {target} ) => {
        setData({...data, 
            [target.name]: target.value
        });
    }

    return [data, handleInputChange];

}