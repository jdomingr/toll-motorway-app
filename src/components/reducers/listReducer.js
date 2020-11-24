import { types } from "../../types/types";

export const listReducer = ( state = {}, action) => {
    
    switch(action.type){

        case types.fetchDataList:
            return {
                isLoading: false,
                list: [...action.payload]
            };

        default: 
            return state;

    }

}