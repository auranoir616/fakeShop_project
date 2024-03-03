//!response berbeda saat mnggunakan axios dan fetch
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export const LoginMethod = async (data, callback) => {
    let url ='https://fakestoreapi.com/auth/login'
    await axios.post(url, data)
    .then((res) =>{
    callback(true, res.data.token)
    return res.data;
    })
    .catch((err)=>{
        callback(false, err)
    })
};

export const getUsername = (token) =>{
    const decoded = jwtDecode(token)
    // console.log('decode token', decoded)
    return decoded.user;
}
// export const LoginMethod = (data, callback)=>{
//     let url = 'https://fakestoreapi.com/auth/login'
//     fetch(url,{
//         method: "POST",
//         headers: {'Content-Type': 'application/json',},
//         body: JSON.stringify(data),    
//     })
//     .then(response => response.json())
//     .then(response =>{
//         callback(true, response)
//         return response
//     })
//     .catch((err)=>{
//         callback(false, err)
//     })
// }
