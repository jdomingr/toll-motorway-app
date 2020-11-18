import React, { createContext, useReducer } from "react";
import { loginReducer } from "./loginReducer";


export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const initialState = {
        isLogged: false,
        name: null,
        last_name: null,
        role: null
    }

    const [user, dispatch] = useReducer(loginReducer, initialState);
    return (

        <UserContext.Provider value={ [user, dispatch] }>
            { children }
        </UserContext.Provider>

    );
}