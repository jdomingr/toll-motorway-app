import { getUserData } from "../helpers/actionOnLocalStorage";

const URL =  'http://localhost:3000';

const { token } = getUserData();

export const getUsersList = async () => {
    try{

        const resp = await fetch(`${URL}/users` ,{
            headers: {
                'Access-Control-Allow-Origin' : '*', 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Credentials' : true,
                'token': token
             }
        });
        return resp.json();

    }catch(error){
        throw new Error(error);
    }
}

export const saveUser = async( user ) => {
    try {
        
        const reqBody = new FormData();
        reqBody.set('name', user.name);
        reqBody.set('last_name', user.last_name);
        reqBody.set('email', user.email);
        reqBody.set('password', user.password);
        reqBody.set('role', user.role);

        const resp = await fetch(`${URL}/users`,{
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin' : '*', 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Credentials' : true,
                'token': token
             },
             body: reqBody

        });

        return resp.json();

    } catch (error) {
        throw new Error(error)
    }
}

export const deleteUser = async( user ) => {
    try {
        const resp = await fetch(`${URL}/users/${user._id}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin' : '*', 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Credentials' : true,
                'token': token
             },

        });

        return resp.json();

    } catch (error) {
        throw new Error(error)
    }
}