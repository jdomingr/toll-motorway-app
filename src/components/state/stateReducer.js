import { stateTypes } from "../../types/stateTypes";

export const stateReducer = ( state = {}, action) => {
    console.log(state)
    switch(action.type){

        case stateTypes.add:
            return [...state,action.payload]
        case stateTypes.update:
            return state.map( item => (item.id === action.payload.id) ? {...item, state: action.payload.state} : item);
        case stateTypes.search:
            return state.find(item => item.id === action.payload);
        case stateTypes.remove:
            return state.filter( item => item.id === action.payload);
        case stateTypes.load:
            return action.payload;
        default:
            return state;        
    }

}