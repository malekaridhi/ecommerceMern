import React from "react";
import styled from "styled-components";
const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
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
