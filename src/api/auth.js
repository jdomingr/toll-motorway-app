

export const authApi = async (dataLogin) => {

    let url = 'http://localhost:3000/login'
    // let formBody = new FormData();
    // formBody.append('email', 'juan@gmail.com');
    // formBody.append('password', '123456');
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: `email=${dataLogin.email}&password=${dataLogin.password}`,
            headers: {
                'Access-Control-Allow-Origin' : '*', 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Credentials' : true 
             }
        });
        return response.json(); 
    } catch (error) {
        throw new Error('Error');
    }
    

}