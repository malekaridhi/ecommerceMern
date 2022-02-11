import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import image from "../images/a1.jpg"
const Container = styled.div`
width: 100%;
height:100vh;
display:flex;
position: relative;
overflow: hidden
`
const Arrow =styled.div`
width: 50px;
height:50px;
background-color: #fff7f7;
border-radius:50%;
display:flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom:0;
left:${props=>props.direction ==="left" && "10px"};
right:${props=>props.direction ==="right" && "10px"};
margin: auto;
cursor:pointer;
opacity:0.5;
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
padding: 20px 0px;
transform:translateX(0vh);
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;

background-color: #${(props) => props.bg};
`
const ImageContainer = styled.div`
height: 100%;
flex: 1;
`
const Image =styled.img`
height: 80%;
margin :30px;
`
const InfoContainer = styled.div`
flex:1;
padding: 50px
`
const Title = styled.h1`
font-size: 70px;
`
const Desc =styled.p`
margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`
const Slider = () => {
     const [slideIndex,setSlideIndex]=useState(0)
    const handleClick=(direction)=>{

    }

    return ( 
        <>
         <Container>
             <Arrow  direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
             </Arrow>
             <Wrapper>
                 <Slide bg="f5fafd">
              <ImageContainer>
                  <Image src={image} />
              </ImageContainer>
              <InfoContainer>
                  <Title>SPRING SALE</Title>
                  <Desc>BE THE STYLE YOU DISIRE !! GET 30% OFF FOR NEW COLLECTION </Desc>
                  <Button>SHOP NOW</Button>
              </InfoContainer>
              </Slide>
              <Slide bg="fcfled">
              <ImageContainer>
                  <Image src={image} />
              </ImageContainer>
              <InfoContainer>
                  <Title>ACCESSORY SALE</Title>
                  <Desc>BE THE STYLE YOU DISIRE !! GET 30% OFF FOR NEW COLLECTION </Desc>
                  <Button>SHOP NOW</Button>
              </InfoContainer>
              </Slide>
              <Slide  bg="fbf0f4">
              <ImageContainer>
                  <Image src={image} />
              </ImageContainer>
              <InfoContainer>
                  <Title>WINTER SALE</Title>
                  <Desc>BE THE STYLE YOU DISIRE !! GET 30% OFF FOR NEW COLLECTION </Desc>
                  <Button>SHOP NOW</Button>
              </InfoContainer>
              </Slide>
             </Wrapper>
             <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlinedIcon/>
             </Arrow>
         </Container>
        </>
     );
}
 
export default Slider;