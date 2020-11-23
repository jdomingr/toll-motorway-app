import React, { createContext, useEffect, useReducer } from "react";
import { getUserData, saveToken } from "../helpers/actionOnLocalStorage";
import { loginReducer } from "./loginReducer";


export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const initialState = {
        isLogged: false,
        name: null,
        last_name: null,
        email: null,
        role: null,
        token: null
    }

    
    const [user, dispatch] = useReducer(loginReducer, initialState, () => {
        const userData = getUserData();
        return (userData) ? userData : initialState; 

    });

    useEffect(() => {
        saveToken(user);
    },[user]);


    return (

        <UserContext.Provider value={ [user, dispatch] }>
            { children }
        </UserContext.Provider>

    );
}