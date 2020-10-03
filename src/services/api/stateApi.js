import axios from 'axios';

export const getStatesApi = async () => {
    try {
        const states =  await axios.get('http://127.0.0.1:8080/api/v1/states');
        return states.data;
        
    } catch (error) {
        console.log('Fetch states', error);
    }
}

export const createStateApi = async (data) => {
    try {
        const createState = await axios.post(`http://localhost:8080/api/v1/states/add`, data);
        console.log(createState);
        return createState.data;
    } catch (error) {
        console.log('Create State',error);
    }
}

export const deleteStateApi = async (id) => {
    try{
        const deleteState = await axios.delete(`http://localhost:8080/api/v1/states/delete/${id}`);
        return deleteState.data;
    }catch(error){
        console.log('Delete State', error);
    }
}