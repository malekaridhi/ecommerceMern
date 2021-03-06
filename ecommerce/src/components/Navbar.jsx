import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import Image from '../images/logo4.png'
import {mobile} from "../responsive"
import {useSelector} from "react-redux"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
const Container = styled.div`
height :60px;

${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
color: #707579;
${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;
const Language =styled.span`
font-size: 10px;
cursor: pointer;
color: #707579;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
border-radius: 50px;
${mobile({ marginLeft:"5px" })}
`
const Input =styled.input`
  border:none;
  outline: none;
  ${mobile({ width: "50px" })}
`
const Center = styled.div`
flex:1;
text-align: center;
`;
const Logo = styled.img`
  font-weight:bold;
  width: 30%;
  ${mobile({ width: "94px" })}
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
&:hover{
  background-color: #f2be00;
  transform: scale(1.1);
}
${mobile({ fontSize: "12px", marginLeft: "10px" ,marginLeft:"3px"})}
`
const Navbar = () => {
  const cart = useSelector(state=>state)
  const Quantity = useSelector(state=>state.cart.quantity)
  console.log(cart);
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
              <Language>EN</Language>
              <SearchContainer>
                 <Input placeholder="Search"/>
                  <SearchIcon style={{color:"#f7ba88",fontSize:16}}/>
              </SearchContainer>
          </Left>
          <Center><Logo src={Image}/></Center>
          <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <Link to="/cart">
              <MenuItem>
              <Badge  badgeContent={Quantity} color="secondary">
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
              </MenuItem>
              </Link>
         </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
