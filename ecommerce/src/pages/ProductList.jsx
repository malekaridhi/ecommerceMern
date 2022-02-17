import React ,{useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile } from '../responsive';
import {useLocation} from "react-router"
const Container = styled.div`

`;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;

`
const Title = styled.h1`
margin:20px;
`
const Filter = styled.div`
margin:20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" ,marginRight:"20px"})}

`
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`

`

const PoductList = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2])
  const cat = location.pathname.split("/")[2];
    return ( 
        <>
        <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select name="color">
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" >
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select >
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
        </Container>
        </>
     );
}
 
export default PoductList;