import { types } from "../types/types";

export const userReducer = ( state = {}, action) => {
    
    switch(action.type){

        case types.getList:
            return {
                list: [...action.payload]
            };

        case types.add:
            return {
                ...state,
                list: [action.payload, ...state.list]
            }

        case types.update:
            return {
                ...state,
                list: state.list.map( user => 
                    user._id === action.payload._id ? action.payload.user  : user
                    )
            }

        case types.delete:
            return {
                ...state,
                list: state.list.filter( user => user._id !== action.payload.id)
            }
        default: 
            return state;

    }

}