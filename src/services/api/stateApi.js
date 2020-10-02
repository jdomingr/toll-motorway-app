import axios from 'axios';

export const getStatesApi = async () => {
    try {
        const states =  await axios.get('http://127.0.0.1:8080/api/v1/states');
        return states.data;
        
    } catch (error) {
        console.log(error)
    }
}