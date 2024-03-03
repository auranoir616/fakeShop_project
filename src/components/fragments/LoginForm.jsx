import ComponentsForm from "../elements/ComponentForm";
import ButtonSubmit from "../elements/ButtonSubmit";
import { LoginMethod } from "../service";
import { useState } from "react";
const FormLogin=()=>{
    const [loginFailed,setLoginFailed] = useState("")
    const handleLogin =(e)=>{
        e.preventDefault()
        const data ={
            username: e.target.username.value,
            password: e.target.password.value
        }
        LoginMethod(data, (status, res)=>{
            console.log('res1', res)
            if(status){
                localStorage.setItem("token", res)
                console.log('res2', res)
                window.location.href = '/shop'
            }else{
                setLoginFailed(res.response.data)
                console.log(res.response)

            }
        })
    }
    
    return(
        <div className="w-full h-full bg-white rounded-md flex flex-col justify-center items-start">
            <div className="w-full h-full flex flex-col justify-center items-center">
            <form onSubmit={handleLogin} className="w-full h-full flex flex-col justify-center items-center">
                <p className="font-bold text-3xl">Login
                <hr/>
                </p>
            <ComponentsForm label="username" type="text" id="username" name="username" placeholder="username"/>
            <ComponentsForm label="password" type="password" id="password" name="password" placeholder="*********"/>
            <ButtonSubmit color="bg-blue-200" type="submit">Login</ButtonSubmit>
            </form>
                <p>{loginFailed}</p>
            </div>
        </div>
    )
}
export default FormLogin
