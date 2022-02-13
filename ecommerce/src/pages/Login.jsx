import React from "react";
import styled from "styled-components";
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
width: 40%;
padding:20px;
background-color:white;

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
min-width: 25%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 100%;
border: none;
padding: 15px 20px;
background-color: #f58840;
color: white;
cursor: pointer;
`;
const Link = styled.a``;
const Error = styled.span``;
const Login = () => {
  return (
    <>
      <Container>
          <Wrapper>
              <Title>LOGIN</Title>
              <Form>
                  <Input placeholder="username"/>
                  <Input placeholder="password"/>
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
