import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import Image from '../images/logo4.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
height :60px;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;
const Language =styled.span`
font-size: 10px;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px
`
const Input =styled.input`
  border:none;
`
const Center = styled.div`
flex:1;
text-align: center;
`;
const Logo = styled.img`
  font-weight:bold;
  width: 30%;
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end
`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px
`
const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
              <Language>EN</Language>
              <SearchContainer>
                 <Input/>
                  <SearchIcon style={{color:"gray",fontSize:16}}/>
              </SearchContainer>
          </Left>
          <Center><Logo src={Image}/></Center>
          <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
              <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
              </MenuItem>
         </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
