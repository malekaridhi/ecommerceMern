import React,{useState} from 'react';


const Login = () => {
    const [user,setUser]=useState("")
    const [password,setPassword]=useState("")
     
    const changeUsername = (e)  => {
        setUser(e.target.value);
    }
    const changePassword = (e)  => {
        setPassword(e.target.value);
    }
    return ( 
    <div >
        <input type="text" 
        placeholder='username'
        onChange={changeUsername}
        />
         <input type="password" 
        placeholder='password'
        onChange={changePassword}
        />
        <button>Login</button>

        </div> );
}
 
export default Login;