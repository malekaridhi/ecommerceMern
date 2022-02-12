import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
const Container = styled.div`
 height: 60vh;
 background-color: #f5fafd;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
`
const Desc =styled.p`
font-size: 27px;
font-weight: 300;
margin-bottom:20px;

`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border:1px solid lightgray;
`
const Input = styled.input`
border:none;
`
const Button = styled.button`

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