import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';
const Container = styled.div`
 height: 40vh;
 background-color: #f5fafd;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 ${mobile({ height: "50vh" })}
`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
${mobile({ marginBottom: "0px" ,fontSize:"60px"})}
`
const Desc =styled.p`
font-size: 27px;
font-weight: 300;
margin-bottom:20px;
${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border:1px solid lightgray;
  ${mobile({ width: "80%" })}
`
const Input = styled.input`
border:none;
flex 8;
padding-left:20px;
`
const Button = styled.button`
flex:1;
border:none;
color:white;
background-color: #FFDAB9;
`

const NewsLetter = () => {
    return ( 
        <>
        <Container>
             <Title>
             NewsLetter
             </Title>
             <Desc>
                 Subscribe to our NewsLetter and get updates from your favorite products.
             </Desc>
             <InputContainer>
                    <Input placeholder='Your email'/>
                    <Button>
                        <SendIcon/>
                    </Button>
             </InputContainer>
        </Container>
        </>
     );
}
 
export default NewsLetter;