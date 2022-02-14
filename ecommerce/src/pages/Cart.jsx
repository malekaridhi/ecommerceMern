import React from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import image from "../images/c6.jpg"
const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding:20px;
`;
const TopButton = styled.button`
padding:10px;
font-weight: 600;
cursor:pointer;
border: ${props=>props.type==="filled" && "none"};
background-color: ${props=>props.type==="filled" ? "black":"transparent"};
color: ${props=>props.type==="filled" && "white"};

`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;
const Bottom = styled.div`
display:flex;
justify-content: space-between;
`;
const Info = styled.div`
flex:3;

`;
const Product = styled.div`
display:flex;
justify-content: space-between;
`;
const ProdcutDetail = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width:200px;

`;
const Detail = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer = styled.div`
display:flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
flex:1;
`;
const SummaryTitle = styled.h1``
const summaryItem = styled.div``;
const summaryItemText = styled.span``;
const summaryItemPrice = styled.span``;
const Button = styled.button``;

const Cart = () => {
    return ( 

        <>
        <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                       <TopText>Shopping Bag(2)</TopText>
                       <TopText>Your Wishlist</TopText>
                    </TopTexts>
                <TopButton type="filled" >CHECKOUT NOW</TopButton>
                
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProdcutDetail>
                            <Image src={image}/>
                            <Detail>
                                <ProductName> <b>Product:</b> SPORTWEAR LONG SLEEVE </ProductName>
                                <ProductId><b>ID:</b>75399521147</ProductId>
                                <ProductColor color="grey"/>
                                <ProductSize><b>Size:</b>36</ProductSize>
                            </Detail>
                        </ProdcutDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>1</ProductAmount>
                                <RemoveIcon/>  
                            </ProductAmountContainer>
                            <ProductPrice>
                                     120DT
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle></SummaryTitle>
                    <summaryItem>
                        <summaryItemText></summaryItemText>
                        <summaryItemPrice></summaryItemPrice>
                    </summaryItem>
                    <summaryItem>
                        <summaryItemText></summaryItemText>
                        <summaryItemPrice></summaryItemPrice>
                    </summaryItem>
                    <summaryItem>
                        <summaryItemText></summaryItemText>
                        <summaryItemPrice></summaryItemPrice>
                    </summaryItem>
                    <summaryItem>
                        <summaryItemText></summaryItemText>
                        <summaryItemPrice></summaryItemPrice>
                    </summaryItem>
                </Summary>
            </Bottom>
        </Wrapper>
       <Footer/>
        </Container>
        </>
     );
}
 
export default Cart;