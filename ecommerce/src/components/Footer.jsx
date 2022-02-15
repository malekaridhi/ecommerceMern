import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1`
color:#f2be00;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 30px;
color:#f2be00;

`;
const List = styled.ul`
margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
 width:50%;
 margin-bottom:10px;
`;
const ContactItem = styled.div`
 margin-bottom:20px;
 display:flex;
 align-items:center;
 jutify-content:center;
`;
const Payment = styled.img`
 width:50%;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>BANANA.</Logo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            debitis incidunt impedit nisi ex repudiandae quas fuga corrupti,
            quos eos est aperiam reprehenderit nesciunt iure omnis, facere
            dolorem mollitia minima.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <RoomIcon style={{marginRight:"10px"}}/> Tunis,Tunisia</ContactItem>
            <ContactItem> <LocalPhoneIcon style={{marginRight:"10px"}}/> +216 111111111</ContactItem>
            <ContactItem><MailOutlineIcon style={{marginRight:"10px"}}/> contact@banana.tn</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
      </Container>
    </>
  );
};

export default Footer;
