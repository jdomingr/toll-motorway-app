import { stateTypes } from "../../types/stateTypes";

export const stateReducer = ( state = {}, action) => {
   
    switch(action.type){

        case stateTypes.fetch_data:
            return {loading: false,
                    error: action.payload.error,
                    data: action.payload.data
                    }
        case stateTypes.fetch_data_error:
            return {
                loading: false,
                error: action.payload.error,
                data: []
            }
        default:
            return state;        
    }

}