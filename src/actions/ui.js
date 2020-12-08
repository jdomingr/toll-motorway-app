
import { types } from '../types/types';



export const startLoading = () => ({
    type: types.startLoading,
});

export const finishLoading = () => ({
    type: types.finishLoading
});

export const setError = ( error ) => ({
    type: types.setErrorMsg,
    payload: error

})

export const removeError = () => ({

    type: types.removeErrorMsg

});