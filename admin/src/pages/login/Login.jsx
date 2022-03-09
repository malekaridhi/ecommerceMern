import React, { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/apiReq";
import {useSelector} from "react-redux"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  console.log(state)
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="login">
      <div className="wrapper">
        <form className="loginForm">
          <h1 className="loginTitle">LOGIN</h1>
          <input
            className="inputLogin"
            type="text"
            placeholder="username"
            onChange={changeUsername}
          />
          <input
            className="inputLogin"
            type="password"
            placeholder="password"
            onChange={changePassword}
          />
          <button className="buttonLogin" onClick={handleLogin}>
            Login <ArrowForwardIosIcon className="loginIcon"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
