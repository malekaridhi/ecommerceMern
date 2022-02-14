import React from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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
`;
const Info = styled.div``;
const Product = styled.div``;
const ProdcutDetail = styled.div``;
const Image = styled.img``;
const Detail = styled.div``;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;
const PriceDetail = styled.div``;
const ProductAmountContainer = styled.div``;
const ProductAmount = styled.div``;
const ProductPrice = styled.div``;
const Hr = styled.hr``;
const Summary = styled.div``;
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
                            <Image/>
                            <Detail>
                                <ProductName></ProductName>
                                <ProductId></ProductId>
                                <ProductColor></ProductColor>
                                <ProductSize></ProductSize>
                            </Detail>
                        </ProdcutDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount></ProductAmount>
                                <RemoveIcon/>  
                            </ProductAmountContainer>
                            <ProductPrice>

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