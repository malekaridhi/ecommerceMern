import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {popularProducts} from "../data"
import ProductItems from './ProductItems';
import axios from 'axios';
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Products = ({cat,filters,sort}) => {
  console.log(cat,filters,sort)
 const [products, setProducts] = useState([]);
 const [filteredProducts, setFilteredProducts] = useState([]);
useEffect(() => {
  const getProducts = async () =>{
    try {
      const res = await axios.get(cat ? `http://localhost:8000/api/product?categories=${cat}`
      :"http://localhost:8000/api/product")
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  getProducts()
}, [cat])

    return ( 
        <>
        <Container>
          {popularProducts.map(item=>(
              <ProductItems item={item} key={item.id} />
          ))}
        </Container>
        </>
     );
}
 
export default Products;