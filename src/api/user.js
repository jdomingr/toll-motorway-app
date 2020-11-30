import { getUserData } from "../helpers/actionOnLocalStorage";

const URL =  'http://localhost:3000';


export const getUsersList = async () => {
    const { token } = getUserData();
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
    const { token } = getUserData();
    try {
        
        const reqBody = {
            name: user.name,
            last_name: user.last_name,
            email: user.email,
            password: '123456',
            role: user.role,
        }

        const resp = await fetch(`${URL}/users`,{
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin' : '*', 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials' : true,
                'token': token
            },
            body: JSON.stringify(reqBody)

        });

        return resp.json();

    } catch (error) {
        throw new Error(error)
    }
}

export const deleteUser = async( user ) => {
    const { token } = getUserData();
    try {
        const resp = await fetch(`${URL}/users/${user._id}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin' : '*', 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials' : true,
                'token': token
             },

        });

        return resp.json();

    } catch (error) {
        throw new Error(error)
    }
}