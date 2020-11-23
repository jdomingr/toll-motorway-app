

export const saveToken =  (user) => {

    const userData = {
        
        isLogged: user.isLogged,
        email: user.email,
        last_name: user.last_name,
        name: user.name,
        role: user.role,
        token: user.token
    }
    localStorage.setItem('userData', JSON.stringify(userData));

}

export const getUserData =  () => {
    return JSON.parse(localStorage.getItem('userData'))

}