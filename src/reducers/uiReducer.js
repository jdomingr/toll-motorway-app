import { types } from "../types/types";

const initialState = {
    isLoading: false,
    errorMsg: null

}
export const uiReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.startLoading:
            
            return {
                ...state,
                isLoading: true
            };
        
        case types.finishLoading:
            
            return {
                ...state,
                isLoading: false
            };

        case types.setErrorMsg:
            return {
                ...state,
                errorMsg: action.payload
            };
        
        case types.removeErrorMsg:
            return {
                ...state,
                errorMsg: null
            };

        default:
            return state;
    }

}