import React from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import image from "../images/c6.jpg";
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
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
${mobile({ display: "none" })}
`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;
const Bottom = styled.div`
display:flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
flex:3;

`;
const Product = styled.div`
display:flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;
const ProdcutDetail = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width:160px;

`;
const Detail = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
// justify-content: space-around;

`;
const ProductName = styled.span`
font-size:30px;
`;
const ProductId = styled.span``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin-top:20px;
`;
const SizeName =styled.span`
margin-right: 20px;

font-weight: 600;
`
const SizeValue =styled.span`

`
const ProductSize = styled.div`
margin-top:20px;
display:flex;
`;
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
${mobile({ margin: "30px 30px" })}
`;
const ProductPrice = styled.div`
font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
 flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
font-weight:200;

`;

const SummaryItem =styled.div`
margin: 30px 0px;
display:flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector(state =>state.cart)
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
                                <ProductName>SPORTWEAR LONG SLEEVE </ProductName>
                                {/* <ProductId><b>ID:</b>75399521147</ProductId> */}
                                <ProductSize>
                                <SizeName>Size</SizeName>
                                <SizeValue>36</SizeValue>
                                </ProductSize>
                                <ProductColor color="grey"/>
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
                    <SummaryTitle> ORDER SUMMARY </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>130 DT</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>20 DT</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-20 DT</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>130 DT</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
       <Footer/>
        </Container>
        </>
     );
}
 
export default Cart;