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
    const handleLogin = ()=> {
        e.preventDefault();
        // login(dispatch, { username, password });
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
        <button onClick={handleLogin}>Login</button>

        </div> );
}
 
export default Login;