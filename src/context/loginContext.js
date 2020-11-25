import React, { createContext, useEffect, useReducer } from "react";
import { getUserData, saveToken } from "../helpers/actionOnLocalStorage";
import { loginReducer } from "./loginReducer";
import jwt from 'jsonwebtoken';

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

    const isTokenExpired = ( token ) => {
        const { exp } = jwt.decode(token); 
        //exp converted to milliseconds - 3 minutes
        const expirationTime = (exp * 1000) - 180000;
        return Date.now() >= expirationTime;
        
    }

    
    const [user, dispatch] = useReducer(loginReducer, initialState, () => {
        const userData = getUserData();
       

        if( userData ) {

            if(isTokenExpired(userData.token)){
                return initialState;
            }
            return userData;

        }

        return initialState

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