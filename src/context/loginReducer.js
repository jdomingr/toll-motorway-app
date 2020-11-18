import { types } from '../types/types';

const initialState = {
    isLogged: false,
    name: null,
    last_name: null,
    role: null
}
export const loginReducer = ( state = {}, action) => {

    switch( action.type ) {

        case types.login: 
            return {
                ...action.payload,
                isLogged: true
            }
            
        case types.logout:
            return initialState;
            
        default: 
            return state; 
    }

}