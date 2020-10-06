import { loginTypes } from '../../types/loginTypes';

export const loginReducer = ( state = {}, action) => {
    
    switch(action){

        case loginTypes.login:
            return {
                isLogged: true,
                userData: action.payload.data
            };
        case loginTypes.logout:
            return {
                isLogged: true,
                userData: []
            };
        default:
            return state;
    }

}
