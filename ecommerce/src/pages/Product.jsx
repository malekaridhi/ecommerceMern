import React ,{useState}from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import image from "../images/c2.jpg"
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";
import RemoveIcon from '@mui/icons-material/Remove';
import {useLocation} from "react-router"
const Container = styled.div``;
const Wrapper = styled.div`
padding:50px;
display:flex;

${mobile({ padding: "10px", flexDirection: "column" })};
`;
const ImageContainer = styled.div`
flex:1;

`;
const Image = styled.img`
width: 100%;
height:90vh;
object-fit: cover;
${mobile({ height: "39vh" })}
`;
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
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
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({ width: "100%" })}
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
 
`
const FilterColor = styled.div`
width: 20px;
height:20px;
border-radius:50%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
paddig: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight:200;
`
const Amount = styled.span`
width: 30px;
height:30px;
border-radius:5px;
border: 2px solid #FFDAB9;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px
`
const Button = styled.button`
padding: 15px;
border: 2px solid #FFDAB9;
background-color: white;
cursor: pointer;
font-weight:500;
//border-radius:40px;
&:hover{
    background-color: #f5fafd; 
}
`
const Product = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
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
            <Title>  Mini Dress </Title>
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
                    </Filter>
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
               
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <RemoveIcon/>
                    <Amount>1</Amount>
                    <AddIcon/>
                </AmountContainer>
                <Button> ADD TO CART </Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        
        <NewsLetter />
        <Footer />
      </Container>
    </>
  );
};

export default Product;
