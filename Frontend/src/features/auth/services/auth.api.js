import axios from "axios";

export async function registerUser({username,email,password}) {
    
    try{
        
        const response =axios.post('http://localhost:3000/api/auth/register', {
        username,
        email,
        password
    },{
        withCredentials: true
    })

    return response.data;

    }catch(err){
        cosole.log(err)
    }
}