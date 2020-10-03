import { stateTypes } from "../../types/stateTypes";

export const stateReducer = ( state = {}, action) => {
   
    switch(action.type){

        case stateTypes.add:
            return {loading: false,
                    error: action.payload.error,
                    data: action.payload.data
                    }
        case stateTypes.update:
            return state.map( item => (item.id === action.payload.id) ? {...item, state: action.payload.state} : item);
        case stateTypes.search:
            return state.find(item => item.id === action.payload);
        case stateTypes.remove:
            // return state.filter( item => item.id === action.payload);
            return {loading: false,
                error: action.payload.error,
                data: action.payload.data
                }
        case stateTypes.load:
            return {
                loading: false,
                error: action.payload.error,
                data: action.payload.data
            };
        default:
            return state;        
    }

}