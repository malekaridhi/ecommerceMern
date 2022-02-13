import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import image from "../images/c2.jpg"
const Container = styled.div``;
const Wrapper = styled.div`
padding:50px;
display:flex;
`;
const ImageContainer = styled.div`
flex:1;

`;
const Image = styled.img`
width: 100%;
height:90vh;
object-fit: cover;
`;
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;

`;
const Title = styled.h1`
font-weight: 200;

`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight:200;
font-size:40px
`;
const FilterContainer = styled.div``
const Filter = styled.div``
const FilterTitle = styled.span``
const FilterColor = styled.div``
const FilterSize = styled.select``
const FilterSizeOption = styled.option``
const AddContainer = styled.div``
const AmountContainer = styled.div``
const Amount = styled.span``
const Button = styled.button``
const Product = () => {
  return (
    <>
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <ImageContainer>
            <Image src={image} />
          </ImageContainer>
          <InfoContainer>
            <Title> Black Mini Dress </Title>
            <Desc>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error et
              sunt doloribus sed nam ex dolore laudantium eos dolorem a
              recusandae ea perferendis reiciendis architecto doloremque
              adipisci placeat, facilis atque.
            </Desc>
            <Price>300 DT</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"></FilterColor>
                    <FilterColor color="darkblue"></FilterColor>
                    <FilterColor color="gray"></FilterColor>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                        <FilterSizeOption>XXXL</FilterSizeOption>
                    </FilterSize>
                </Filter>    
                </Filter>
            </FilterContainer>
          </InfoContainer>
        </Wrapper>
        
        <NewsLetter />
        <Footer />
      </Container>
    </>
  );
};

export default Product;
