import React from "react";
import styed from "styled-components";
const Container = styed.div`
height :60px;
`;
const Wrapper = styed.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`;
const Left = styed.div`
flex:1;
`;
const Language =styed.span`
font-size: 10px;
cursor: pointer;
`
const Center = styed.div`
flex:1;
`;
const Right = styed.div`
flex:1;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
              <Language>EN</Language>
              <SearchContainer>
                  input
              </SearchContainer>
          </Left>
          <Center>Center</Center>
          <Right>Right</Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
