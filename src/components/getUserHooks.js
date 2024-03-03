import { useEffect, useState } from "react"
import { getUsername } from "./service"
export const useAuthLogin = () =>{
    const[user, setUser] = useState('')
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            setUser(getUsername(token))
        }else{
            window.location.href = "/"
        }
        },[])
        return user  
}