

export const authApi = async () => {

    let url = 'http://localhost:3000/login'
    // let formBody = new FormData();
    // formBody.append('email', 'juan@gmail.com');
    // formBody.append('password', '123456');
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: 'email=juan@gmail.com&password=123456',
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