import React,{useEffect,useState} from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/reducers/apiReq";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/794432/pexels-photo-794432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
width: 25%;
padding:20px;
background-color:white;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
border-left: 6px solid #f58840; 
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px  0px;
padding: 10px;
`;

const Button = styled.button`
width: 100%;
border: none;
padding: 15px 20px;
background-color: #f58840;
color: white;
cursor: pointer;
`;
const Link = styled.a`
margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span``;
const Login = () => {
 const [username,setUsername]= useState("")
 const [password,setPassword]= useState("")
  const handleLogin = (e) =>{
    e.preventDefault();
  }
  return (
    <>
      <Container>
          <Wrapper>
              <Title>LOGIN</Title>
              <Form>
                  <Input placeholder="username"
                  onChange={(e)=> setUsername(e.target.value)}
                  />
                  <Input placeholder="password"
                  onChange={(e)=>setPassword(e.target.username)}
                  />
                <Button>LOGIN</Button>
                <Link>FORGET PASSWORD ??</Link>
                <Link>CREATE NEW ACCOUNT </Link>
              </Form>
          </Wrapper>
      </Container>
    </>
  );
};

export default Login;
